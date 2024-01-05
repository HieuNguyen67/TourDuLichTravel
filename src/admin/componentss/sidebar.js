import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, NavLink } from "react-router-dom";

const SIDEBAR = () => {
  return (
    <>
      <div style={{ display: "flex", height: "100%", minHeight: "800px" }}>
        <Sidebar width="300px">
          <Menu
            rootStyles={{
              background:
                "linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)",
            }}
          >
            <SubMenu label="User" component="div" defaultOpen>
              <MenuItem
                component={
                  <NavLink
                    to="/TourDuLichTravel/admin/UserLietKe"
                    style={({ isActive, isPending, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        background: isActive
                          ? "linear-gradient(253deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                          : "",

                        color: isPending ? "red" : "black",
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                  />
                }
              >
                {" "}
                Liệt kê
              </MenuItem>
              <MenuItem
                component={
                  <NavLink
                    to="/TourDuLichTravel/admin/UserThemMoi"
                    style={({ isActive, isPending, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        background: isActive
                          ? "linear-gradient(253deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                          : "",

                        color: isPending ? "red" : "black",
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                  />
                }
              >
                {" "}
                Thêm mới
              </MenuItem>
            </SubMenu>
            <SubMenu label="Tour" component="div" defaultOpen>
              <MenuItem
                component={
                  <NavLink
                    to="/TourDuLichTravel/admin/TourLietKe"
                    style={({ isActive, isPending, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        background: isActive
                          ? "linear-gradient(253deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                          : "",

                        color: isPending ? "red" : "black",
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                  />
                }
              >
                {" "}
                Liệt kê
              </MenuItem>
              <MenuItem
                component={
                  <NavLink
                    to="/TourDuLichTravel/admin/TourThemMoi"
                    style={({ isActive, isPending, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        background: isActive
                          ? "linear-gradient(253deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                          : "",

                        color: isPending ? "red" : "black",
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                  />
                }
              >
                {" "}
                Thêm mới
              </MenuItem>
            </SubMenu>
            <SubMenu label="Hướng Dẫn Viên" component="div" defaultOpen>
              <MenuItem
                component={
                  <NavLink
                    to="/TourDuLichTravel/admin/GuideLietKe"
                    style={({ isActive, isPending, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        background: isActive
                          ? "linear-gradient(253deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                          : "",

                        color: isPending ? "red" : "black",
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                  />
                }
              >
                {" "}
                Liệt kê
              </MenuItem>
              <MenuItem
                component={
                  <NavLink
                    to="/TourDuLichTravel/admin/GuideThemMoi"
                    style={({ isActive, isPending, isTransitioning }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        background: isActive
                          ? "linear-gradient(253deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                          : "",

                        color: isPending ? "red" : "black",
                        viewTransitionName: isTransitioning ? "slide" : "",
                      };
                    }}
                  />
                }
              >
                {" "}
                Thêm mới
              </MenuItem>
            </SubMenu>
            <MenuItem
              component={
                <NavLink
                  to="/TourDuLichTravel/admin/OrderList"
                  style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      background: isActive
                        ? "linear-gradient(253deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                        : "",

                      color: isPending ? "red" : "black",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                />
              }
            >
              {" "}
              Danh sách ORDER
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};
export default SIDEBAR;
