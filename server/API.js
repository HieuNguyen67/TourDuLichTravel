const express = require("express");
const multer = require("multer");
// -----------------------------------------------
const app = express.Router();
const db = require("./connectDB/connectDB");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.post("/login", (req, res) => {
  const { identifier, password } = req.body;
  const query = "SELECT * FROM admin WHERE username = ? OR email = ?";
  db.query(query, [identifier, identifier], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const admin = results[0];

    // Kiểm tra mật khẩu, không sử dụng bcrypt trong ví dụ này
    if (admin.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { adminId: admin.AdminID, username: admin.username },
      "your_secret_key",
      { expiresIn: "1h" }
    );

    res.status(200).json({ token, username: admin.username });
  });
});
// Endpoint để lấy danh sách người dùng
app.get("/lay-danh-sach-user", (req, res) => {
  const query = "SELECT * FROM user";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Lỗi khi lấy danh sách người dùng:", err);
      res.status(500).json({ error: "Lỗi máy chủ nội bộ" });
    } else {
      res.json(results);
    }
  });
});
app.get("/lay-danh-sach-guide", (req, res) => {
  const query =
    "SELECT tour.name,tour.start_date,tour.end_date,guide.*" +
    "FROM `guide` " +
    "JOIN tour ON guide.tour_id = tour.id";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Lỗi khi lấy danh sách người dùng:", err);
      res.status(500).json({ error: "Lỗi máy chủ nội bộ" });
    } else {
      res.json(results);
    }
  });
});
// Endpoint để xoá người dùng
app.delete("/xoa-user/:userID", (req, res) => {
  const userID = req.params.userID;
  const query = "DELETE FROM user WHERE id = ?";
  db.query(query, [userID], (err, results) => {
    if (err) {
      console.error("Lỗi khi xoá người dùng:", err);
      res.status(500).json({ error: "Lỗi máy chủ nội bộ" });
    } else {
      res.json({ message: "Người dùng đã được xoá thành công" });
    }
  });
});
app.delete("/xoa-guide/:guideID", (req, res) => {
  const guideID = req.params.guideID;
  const query = "DELETE FROM guide WHERE id = ?";
  db.query(query, [guideID], (err, results) => {
    if (err) {
      console.error("Lỗi khi xoá người dùng:", err);
      res.status(500).json({ error: "Lỗi máy chủ nội bộ" });
    } else {
      res.json({ message: "Người dùng đã được xoá thành công" });
    }
  });
});
app.get("/lay-thong-tin-user/:userID", (req, res) => {
  const userID = req.params.userID;
  const query = "SELECT * FROM user WHERE id = ?";
  db.query(query, [userID], (err, results) => {
    if (err) {
      console.error("Lỗi khi lấy thông tin người dùng:", err);
      res.status(500).json({ error: "Lỗi máy chủ nội bộ" });
    } else {
      res.json(results[0]);
    }
  });
});
app.get("/lay-thong-tin-guide/:guideID", (req, res) => {
  const guideID = req.params.guideID;
  const query = "SELECT * FROM guide WHERE id = ?";
  db.query(query, [guideID], (err, results) => {
    if (err) {
      console.error("Lỗi khi lấy thông tin người dùng:", err);
      res.status(500).json({ error: "Lỗi máy chủ nội bộ" });
    } else {
      const tourInfo1 = results[0];
      const startDate1 = new Date(tourInfo1.birthdate);
      startDate1.setDate(startDate1.getDate() + 1);
      const formattedStartDate1 = startDate1.toISOString().split("T")[0];

      res.json({
        ...tourInfo1,
        birthdate: formattedStartDate1,
      });
    }
  });
});

// Endpoint để cập nhật thông tin người dùng
app.put("/cap-nhat-user/:userID", (req, res) => {
  const userID = req.params.userID;
  const updatedUser = req.body;
  const query = "UPDATE user SET ? WHERE id = ?";
  db.query(query, [updatedUser, userID], (err, results) => {
    if (err) {
      console.error("Lỗi khi cập nhật người dùng:", err);
      res.status(500).json({ error: "Lỗi máy chủ nội bộ" });
    } else {
      res.json({ message: "Thông tin người dùng đã được cập nhật thành công" });
    }
  });
});
app.put("/cap-nhat-guide/:guideID", (req, res) => {
  const guideID = req.params.guideID;
  const updatedUser = req.body;
  const query = "UPDATE guide SET ? WHERE id = ?";
  db.query(query, [updatedUser, guideID], (err, results) => {
    if (err) {
      console.error("Lỗi khi cập nhật người dùng:", err);
      res.status(500).json({ error: "Lỗi máy chủ nội bộ" });
    } else {
      res.json({ message: "Thông tin người dùng đã được cập nhật thành công" });
    }
  });
});
// Endpoint để lấy thông tin tour theo ID
app.get("/lay-thong-tin-tour/:tourID", (req, res) => {
  const { tourID } = req.params;

  const query = "SELECT * FROM tour WHERE id = ?";
  db.query(query, [tourID], (err, results) => {
    if (err) {
      console.error("Lỗi khi lấy thông tin tour:", err);
      res.status(500).json({ error: "Lỗi máy chủ nội bộ" });
    } else {
      const tourInfo = results[0];
      // Clone the date object to avoid modifying the original object
      const startDate = new Date(tourInfo.start_date);
      startDate.setDate(startDate.getDate() + 1);
      const formattedStartDate = startDate.toISOString().split("T")[0];

      const endDate = new Date(tourInfo.end_date);
      endDate.setDate(endDate.getDate() + 1);
      const formattedEndDate = endDate.toISOString().split("T")[0];

      res.json({
        ...tourInfo,
        start_date: formattedStartDate,
        end_date: formattedEndDate,
      });
    }
  });
});

// Endpoint để lấy danh sách tour
app.get("/lay-danh-sach-tour", (req, res) => {
  const query = "SELECT * FROM tour";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Lỗi khi lấy danh sách tour:", err);
      res.status(500).json({ error: "Lỗi máy chủ nội bộ" });
    } else {
      // Định dạng ngày trước khi gửi về frontend (nếu cần)
      const formattedTours = results.map((tour) => ({
        ...tour,
        start_date: tour.start_date.toISOString().split("T")[0],
        end_date: tour.end_date.toISOString().split("T")[0],
      }));

      res.json(formattedTours);
    }
  });
});
app.put("/cap-nhat-tour/:tourID", (req, res) => {
  const tourID = req.params.tourID;
  const updatedTour = req.body;
  const query = "UPDATE tour SET ? WHERE id = ?";
  db.query(query, [updatedTour, tourID], (err, results) => {
    if (err) {
      console.error("Lỗi khi cập nhật tour:", err);
      res.status(500).json({ error: "Lỗi máy chủ nội bộ" });
    } else {
      res.json({ message: "Thông tin tour đã được cập nhật thành công" });
    }
  });
});

// Endpoint để lấy danh sách hình ảnh liên kết với tour
app.get("/lay-hinh-anh-tour/:tourID", (req, res) => {
  const tourID = req.params.tourID;
  const query = "SELECT image FROM image WHERE tour_id = ?";
  db.query(query, [tourID], (err, results) => {
    if (err) {
      console.error("Lỗi khi lấy hình ảnh tour:", err);
      res.status(500).json({ error: "Lỗi máy chủ nội bộ" });
    } else {
      // Trả về mảng các chuỗi base64 đại diện cho hình ảnh
      const base64Images = results.map((result) =>
        result.image.toString("base64")
      );
      res.json(base64Images);
    }
  });
});


// Endpoint để cập nhật hình ảnh cho tour
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Endpoint để cập nhật hình ảnh của tour theo kiểu BLOB
app.put(
  "/cap-nhat-hinh-anh-tour/:tourID",
  upload.array("images"),
  (req, res) => {
    const tourID = req.params.tourID;
    const images = req.files;

    // Xóa hình ảnh cũ
    db.query("DELETE FROM image WHERE tour_id = ?", [tourID], (err, result) => {
      if (err) {
        console.error("Lỗi khi xóa hình ảnh cũ:", err);
        res.status(500).json({ error: "Lỗi máy chủ nội bộ" });
      } else {
        // Thêm hình ảnh mới
        const insertQuery = "INSERT INTO image (tour_id, image) VALUES ?";
        const values = images.map((image) => [tourID, image.buffer]);

        db.query(insertQuery, [values], (err, result) => {
          if (err) {
            console.error("Lỗi khi thêm hình ảnh mới:", err);
            res.status(500).json({ error: "Lỗi máy chủ nội bộ" });
          } else {
            res.json({ message: "Hình ảnh tour đã được cập nhật thành công" });
          }
        });
      }
    });
  }
);

// Route để lấy danh sách tour
app.get("/get-tours", (req, res) => {
  const getToursQuery =
    "SELECT t.*, i.image, g.fullname AS guide_name FROM tour t " +
    "LEFT JOIN image i ON t.id = i.tour_id " +
    "LEFT JOIN guide g ON t.id = g.tour_id " +
    "GROUP BY t.name, g.fullname";

  db.query(getToursQuery, (err, result) => {
    if (err) {
      console.error("Error fetching tours:", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      // Process the result to convert the image to base64
      result.forEach((tour) => {
        if (tour.image) {
          tour.image = tour.image.toString("base64");
        }
      });

      // Group guides by tour
      const toursWithGuides = result.reduce((acc, tour) => {
        const existingTour = acc.find((item) => item.id === tour.id);

        if (existingTour) {
          // Add guide name to the existing tour
          existingTour.guides.push(tour.guide_name);
        } else {
          // Create a new tour with the guide name
          const newTour = {
            ...tour,
            guides: tour.guide_name ? [tour.guide_name] : [],
          };
          delete newTour.guide_name;
          acc.push(newTour);
        }

        return acc;
      }, []);

      res.status(200).json(toursWithGuides);
    }
  });
});


// Route để xoá tour
app.delete("/delete-tour/:tourID", (req, res) => {
  const tourID = req.params.tourID;
  const deleteTourQuery = "DELETE FROM tour WHERE id = ?";
  db.query(deleteTourQuery, [tourID], (err, result) => {
    if (err) {
      console.error("Error deleting tour:", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.status(200).json({ message: "Tour deleted successfully" });
    }
  });
});
app.get("/api/tours/:tourID", async (req, res) => {
  try {
    const tourID = req.params.id;
    const connection = await db.getConnection();
    const [rows] = await connection.query("SELECT * FROM tour WHERE id = ?", [
      tourID,
    ]);
    connection.release();

    if (rows.length > 0) {
      res.json(rows[0]);
    } else {
      res.status(404).json({ message: "Tour not found" });
    }
  } catch (error) {
    console.error("Error fetching tour details:", error);
    res.status(500).json({ message: "Internal Server Err or" });
  }
});

// Route để thêm tour với nhiều ảnh
app.post("/add-tour", upload.array("images", 5), (req, res) => {
  const {
    name,
    start_date,
    end_date,
    price,
    child_price,
    infant_price,
    description,
    quantity,
  } = req.body;
  const images = req.files;

  // Thực hiện các bước lưu thông tin tour vào cơ sở dữ liệu
  const insertTourQuery =
    "INSERT INTO tour (name, start_date, end_date, price,child_price,infant_price, description, quantity) VALUES (?, ?, ?,?,?, ?, ?, ?)";
  db.query(
    insertTourQuery,
    [
      name,
      start_date,
      end_date,
      price,
      child_price,
      infant_price,
      description,
      quantity,
    ],
    (err, result) => {
      if (err) {
        console.error("Error inserting tour:", err);
        res.status(500).json({ message: "Internal server error" });
      } else {
        const tourID = result.insertId;

        // Lưu ảnh vào cơ sở dữ liệu
        if (images && images.length > 0) {
          images.forEach((image, index) => {
            const insertImageQuery =
              "INSERT INTO image (tour_id, image) VALUES (?, ?)";
            db.query(
              insertImageQuery,
              [tourID, image.buffer],
              (err, result) => {
                if (err) {
                  console.error("Error inserting image:", err);
                } else {
                  console.log(`Image ${index + 1} inserted successfully`);
                }
              }
            );
          });
        }

        res.status(200).json({ message: "Tour added successfully" });
      }
    }
  );
});
app.post("/login/user", (req, res) => {
  const { emailOrUsername, password } = req.body;

  const query = `
    SELECT * FROM user
    WHERE (email = ? OR username = ?) AND password = ?
  `;

  db.query(
    query,
    [emailOrUsername, emailOrUsername, password],
    (err, results) => {
      if (err) {
        console.error("MySQL query error:", err);
        res.status(500).json({ error: "Internal server error" });
      } else {
        if (results.length > 0) {
          // Tạo JWT và gửi về client
          const user = results[0];
          const token = jwt.sign({ userId: user.id }, "your_secret_key", {
            expiresIn: "1h",
          });
          res.json({ success: true, user, token });
        } else {
          res.json({ success: false, message: "Invalid credentials" });
        }
      }
    }
  );
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post("/register", async (req, res) => {
  const { username, email, password, phone, address, fullname } = req.body;

  // Kiểm tra xem username hoặc email đã tồn tại chưa
  const checkDuplicateQuery =
    "SELECT * FROM user WHERE username = ? OR email = ?";
  db.query(checkDuplicateQuery, [username, email], async (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }

    // Nếu đã tồn tại người dùng với username hoặc email
    if (results.length > 0) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    // Nếu chưa tồn tại, thực hiện thêm vào cơ sở dữ liệu
    const insertQuery =
      "INSERT INTO user (username, email, password, phone, address, fullname) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(
      insertQuery,
      [username, email, password, phone, address, fullname],
      (err, results) => {
        if (err) {
          console.error("Registration failed:", err);
          return res.status(500).json({ message: "Internal server error" });
        }

        res.status(201).json({ message: "Registration successful" });
      }
    );
  });
});
app.post("/guide_register", async (req, res) => {
  const { selectedTour, email, phone, address, fullname, birthdate } = req.body;

  // Kiểm tra xem username hoặc email đã tồn tại chưa

  // Nếu chưa tồn tại, thực hiện thêm vào cơ sở dữ liệu
  const insertQuery =
    "INSERT INTO guide (tour_id, email, phone, address, fullname,birthdate) VALUES (?,?, ?, ?, ?,?)";
  db.query(
    insertQuery,
    [selectedTour, email, phone, address, fullname, birthdate],
    (err, results) => {
      if (err) {
        console.error("Registration failed:", err);
        return res.status(500).json({ message: "Internal server error" });
      }

      res.status(201).json({ message: "Registration successful" });
    }
  );
});
app.post("/bookings", async (req, res) => {
  const { userId, tourID, adultQuantity, childQuantity, infantQuantity } =
    req.body;
  const status = "Tiếp nhận";

  try {
    // Lấy giá và số lượng của tour dựa trên tourID
    const { price, child_price, infant_price, quantity } = await getTourDetails(
      tourID
    );

    // Kiểm tra xem số lượng yêu cầu có sẵn không
    if (quantity < adultQuantity + childQuantity + infantQuantity) {
      return res.status(400).json({
        error: "Not enough available seats for the requested quantity.",
      });
    }

    // Tính tổng giá
    const total_price =
      price * adultQuantity +
      child_price * childQuantity +
      infant_price * infantQuantity;
    const userTourStatus = await getUserTourStatus(userId, tourID);

    if (userTourStatus === "Tiếp nhận" || userTourStatus === "Đã thanh toán") {
      return res
        .status(400)
        .json({ error: "You have already booked or paid for this tour." });
    } else if (
      userTourStatus === "Đã kết thúc" ||
      userTourStatus === "Đã huỷ"
    ) {
      // Thực hiện query để thêm đơn đặt tour vào cơ sở dữ liệu
      const insertOrderQuery =
        "INSERT INTO `order` (user_id, tour_id, quantity, child_quantity, infant_quantity, total_price, status, booking_date_time) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())";

      db.query(
        insertOrderQuery,
        [
          userId,
          tourID,
          adultQuantity,
          childQuantity,
          infantQuantity,
          total_price,
          status,
        ],
        async (error, result) => {
          if (error) {
            console.error("Error creating order:", error);
            res.status(500).json({ error: "Internal Server Error" });
          } else {
            // Cập nhật số lượng của tour trong bảng tour
            await updateTourQuantity(tourID, adultQuantity);
            await updateTourQuantity1(tourID, childQuantity);

            res.status(201).json({
              message: "Booking successful",
              orderId: result.insertId,
            });
          }
        }
      );
    } else {
      const insertOrderQuery =
        "INSERT INTO `order` (user_id, tour_id, quantity, child_quantity, infant_quantity, total_price, status, booking_date_time) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())";

      db.query(
        insertOrderQuery,
        [
          userId,
          tourID,
          adultQuantity,
          childQuantity,
          infantQuantity,
          total_price,
          status,
        ],
        async (error, result) => {
          if (error) {
            console.error("Error creating order:", error);
            res.status(500).json({ error: "Internal Server Error" });
          } else {
            // Cập nhật số lượng của tour trong bảng tour
            await updateTourQuantity(tourID, adultQuantity);
            await updateTourQuantity1(tourID, childQuantity);

            res.status(201).json({
              message: "Booking successful",
              orderId: result.insertId,
            });
          }
        }
      );
    }
  } catch (error) {
    console.error("Error processing booking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
async function getUserTourStatus(userId, tourID) {
  return new Promise((resolve, reject) => {
    const selectUserTourStatusQuery =
      "SELECT status FROM `order` WHERE user_id = ? AND tour_id = ? ORDER BY booking_date_time DESC LIMIT 1";
    db.query(selectUserTourStatusQuery, [userId, tourID], (error, result) => {
      if (error) {
        console.error("Error getting user tour status:", error);
        reject(error);
      } else {
        const userTourStatus = result.length > 0 ? result[0].status : null;
        resolve(userTourStatus);
      }
    });
  });
}

// Hàm lấy giá và số lượng của tour dựa trên tourID
async function getTourDetails(tourID) {
  return new Promise((resolve, reject) => {
    const selectTourDetailsQuery =
      "SELECT price, child_price, infant_price FROM tour WHERE id = ?";
    db.query(selectTourDetailsQuery, [tourID], (error, result) => {
      if (error) {
        console.error("Error getting tour details:", error);
        reject(error);
      } else {
        // Giả sử chỉ có một kết quả
        const tourDetails =
          result.length > 0
            ? result[0]
            : { price: 0, child_price: 0, infant_price: 0 };
        resolve(tourDetails);
      }
    });
  });
}

// Hàm cập nhật số lượng của tour trong bảng tour
async function updateTourQuantity(tourID, bookedQuantity) {
  return new Promise((resolve, reject) => {
    const updateTourQuantityQuery =
      "UPDATE tour SET quantity = quantity - ? WHERE id = ?";
    db.query(
      updateTourQuantityQuery,
      [bookedQuantity, tourID],
      (error, result) => {
        if (error) {
          console.error("Error updating tour quantity:", error);
          reject(error);
        } else {
          resolve();
        }
      }
    );
  });
}
async function updateTourQuantity1(tourID, bookedQuantity) {
  return new Promise((resolve, reject) => {
    const updateTourQuantityQuery =
      "UPDATE tour SET quantity = quantity - ? WHERE id = ?";
    db.query(
      updateTourQuantityQuery,
      [bookedQuantity, tourID],
      (error, result) => {
        if (error) {
          console.error("Error updating tour quantity:", error);
          reject(error);
        } else {
          resolve();
        }
      }
    );
  });
}

app.get("/api/orders", (req, res) => {
  const query =
    "SELECT order.id, user.fullname,user.email,user.phone,user.address, tour.name, tour.start_date, tour.end_date, order.quantity,order.child_quantity,order.infant_quantity, order.total_price, order.status,order.booking_date_time " +
    "FROM `order` " +
    "JOIN user ON order.user_id = user.id " +
    "JOIN tour ON order.tour_id = tour.id";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching orders:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});

// API endpoint to get the details of a specific order
app.get("/api/orders/:orderID", (req, res) => {
  const orderID = req.params.orderID;

  const query =
    "SELECT user.*, `order`.*, tour.name, tour.id, tour.start_date, tour.end_date " +
    "FROM `order` " +
    "JOIN user ON `order`.user_id = user.id " +
    "JOIN tour ON `order`.tour_id = tour.id " +
    "WHERE `order`.id = ?";

  db.query(query, [orderID], (err, results) => {
    if (err) {
      console.error("Error fetching order details:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (results.length === 0) {
        res.status(404).json({ error: "Order not found" });
      } else {
        res.json(results[0]);
      }
    }
  });
});
app.put("/api/orders/:orderID/status", (req, res) => {
  const orderID = req.params.orderID;
  const newStatus = req.body.status;

  const updateStatusQuery = "UPDATE `order` SET status = ? WHERE id = ?";

  db.query(updateStatusQuery, [newStatus, orderID], (err, result) => {
    if (err) {
      console.error("Error updating status:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ message: "Status updated successfully" });
    }
  });
});
app.get("/api/orders/user/:userID", (req, res) => {
  const userID = req.params.userID;
  const getOrdersByUserQuery =
    "SELECT order.id, user.fullname, tour.name, tour.start_date, tour.end_date, order.quantity,order.child_quantity,order.infant_quantity, order.total_price,order.booking_date_time, order.status, image.image " +
    "FROM `order` " +
    "JOIN user ON `order`.user_id = user.id " +
    "JOIN tour ON `order`.tour_id = tour.id " +
    "LEFT JOIN (SELECT tour_id, MIN(image) AS image FROM image GROUP BY tour_id) AS image ON tour.id = image.tour_id " +
    "WHERE `order`.user_id = ?";

  db.query(getOrdersByUserQuery, [userID], (err, results) => {
    if (err) {
      console.error("Error fetching orders by user:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // Convert the image blob to base64 for sending it to the frontend
      const ordersWithBase64Image = results.map((order) => {
        return {
          ...order,
          image: order.image ? order.image.toString("base64") : null,
        };
      });
      res.json(ordersWithBase64Image);
    }
  });
});

// -----------------------------------------------
module.exports = app;
