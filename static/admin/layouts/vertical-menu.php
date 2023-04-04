<header id="page-topbar">
    <div class="navbar-header">
        <div class="d-flex">
            <!-- LOGO -->
            <div class="navbar-brand-box">
                <a href="index.php" class="logo logo-dark">
                    <span class="logo-sm">
                        <img src="assets/images/logo-sm.svg" alt="" height="35">
                    </span>
                    <span class="logo-lg">
                        <img src="assets/images/logo.png" alt="" height="35"> <span class="logo-txt"></span>
                    </span>
                </a>

                <a href="index.php" class="logo logo-light">
                    <span class="logo-sm">
                        <img src="assets/images/logo-sm.svg" alt="" height="35">
                    </span>
                    <span class="logo-lg">
                        <img src="assets/images/logo.png" alt="" height="35"> <span class="logo-txt"></span>
                    </span>
                </a>
            </div>
            <button type="button" class="btn btn-sm px-3 font-size-16 header-item" id="vertical-menu-btn">
                <i class="fa fa-fw fa-bars"></i>
            </button>
            <!-- App Search-->           
        </div>

        <div class="d-flex">
            <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item bg-soft-light border-start border-end" id="page-header-user-dropdown"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <!-- <img class="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg"
                        alt="Header Avatar"> -->
                    <span class="d-none d-xl-inline-block ms-1 fw-medium"><?php echo $_SESSION["username"]; ?>.</span>
                    <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-end">
                    <!-- item-->                     
                    <a class="dropdown-item" href="logout.php"><i class="mdi mdi-logout font-size-16 align-middle me-1"></i> <?php echo $language["Logout"]; ?></a>
                </div>
            </div>
        </div>
    </div>
</header>

<div class="vertical-menu">
    <div data-simplebar class="h-100">
        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title" data-key="t-menu">Menu</li>
                <li>
                    <a href="index.php">
                        <i data-feather="home"></i>
                        <span data-key="t-dashboard">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="inquiries.php">
                        <i data-feather="layout"></i>
                        <span data-key="t-horizontal">Inquiries</span>
                    </a>
                </li>
                <li>
                    <a href="openings.php">
                        <i data-feather="layout"></i>
                        <span data-key="t-horizontal">Openings</span>
                    </a>
                </li>
                <li>
                    <a href="applications.php">
                        <i data-feather="layout"></i>
                        <span data-key="t-horizontal">Applications</span>
                    </a>
                </li>
                <li>
                    <a href="subscribers.php">
                        <i data-feather="layout"></i>
                        <span data-key="t-horizontal">Subscribers</span>
                    </a>
                </li>
                <li>
                    <a href="users.php">
                        <i data-feather="layout"></i>
                        <span data-key="t-horizontal">Users</span>
                    </a>
                </li>
            </ul>
        </div>
        <!-- Sidebar -->
    </div>
</div>