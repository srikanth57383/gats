<?php include 'layouts/config.php'; ?>
<?php include 'layouts/session.php'; ?>
<?php include 'layouts/head-main.php'; ?>

<head>
    <title> Admin Dashboard | zyclyx</title>
    <?php include 'layouts/head.php'; ?>
    <link href="assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css" rel="stylesheet" type="text/css" />
    
    <?php include 'layouts/head-style.php'; ?>
</head>

<?php include 'layouts/body.php'; ?>

<!-- Begin page -->
<div id="layout-wrapper">

    <?php include 'layouts/menu.php'; ?>

    <!-- ============================================================== -->
    <!-- Start right Content here -->
    <!-- ============================================================== -->
    <div class="main-content">

        <div class="page-content">
            <div class="container-fluid">

                <!-- start page title -->
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0 font-size-18">Dashboard</h4>

                            <div class="page-title-right">
                                <ol class="breadcrumb m-0">
                                    <li class="breadcrumb-item"><a href="javascript: void(0);"></a></li>
                                    <li class="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- end page title -->

                <div class="row">
                            <div class="col-xl-3 col-md-6">
                                <!-- card -->
                                <div class="card card-h-100">
                                    <!-- card body -->
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col-6">
                                                <span class="text-muted mb-3 lh-1 d-block text-truncate">Inquiries</span>
                                                <h4 class="mb-3">
                                                    <?php
                                                    $sql = "SELECT COUNT(id) as i_count FROM `enquiry` WHERE website='zyclyx'";
                                                    $result = $link->query($sql);

                                                    if ($result->num_rows > 0) {
                                                    // output data of each row
                                                        while($row = $result->fetch_assoc()) {                                                                                                                          
                                                            echo "<span class='counter-value' data-target='".$row['i_count']."'>0</span>";
                                                        }
                                                    } else{
                                                        echo "<span class='counter-value' data-target='0'>0</span>";
                                                    }
                                                    // $link->close();
                                                    ?>                                                    
                                                </h4>
                                            </div>                                                   
                                        </div>
 
                                    </div><!-- end card body -->
                                </div><!-- end card -->
                            </div><!-- end col -->
        
                            <div class="col-xl-3 col-md-6">
                                <!-- card -->
                                <div class="card card-h-100">
                                    <!-- card body -->
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col-6">
                                                <span class="text-muted mb-3 lh-1 d-block text-truncate">Applications</span>
                                                <h4 class="mb-3">
                                                <?php
                                                    $sql = "SELECT COUNT(id) as r_count FROM `resumes` WHERE website='zyclyx'";
                                                    $result = $link->query($sql);

                                                    if ($result->num_rows > 0) {
                                                    // output data of each row
                                                        while($row = $result->fetch_assoc()) {                                                                                                                          
                                                            echo "<span class='counter-value' data-target='".$row['r_count']."'>0</span>";
                                                        }
                                                    } else{
                                                        echo "<span class='counter-value' data-target='0'>0</span>";
                                                    }
                                                    // $link->close();
                                                    ?>          
                                                </h4>
                                            </div>                                           
                                        </div>
 
                                    </div><!-- end card body -->
                                </div><!-- end card -->
                            </div><!-- end col-->
        
                            <div class="col-xl-3 col-md-6">
                                <!-- card -->
                                <div class="card card-h-100">
                                    <!-- card body -->
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col-6">
                                                <span class="text-muted mb-3 lh-1 d-block text-truncate">Openings</span>
                                                <h4 class="mb-3">
                                                <?php
                                                    $sql = "SELECT COUNT(id) as c_count FROM `careers` WHERE website='zyclyx'";
                                                    $result = $link->query($sql);

                                                    if ($result->num_rows > 0) {
                                                    // output data of each row
                                                        while($row = $result->fetch_assoc()) {                                                                                                                          
                                                            echo "<span class='counter-value' data-target='".$row['c_count']."'>0</span>";
                                                        }
                                                    } else{
                                                        echo "<span class='counter-value' data-target='0'>0</span>";
                                                    }
                                                   //  $link->close();
                                                    ?>          
                                                </h4>
                                            </div>                                            
                                        </div>
 
                                    </div><!-- end card body -->
                                </div><!-- end card -->
                            </div><!-- end col -->
        
                            <div class="col-xl-3 col-md-6">
                                <!-- card -->
                                <div class="card card-h-100">
                                    <!-- card body -->
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col-6">
                                                <span class="text-muted mb-3 lh-1 d-block text-truncate">Users</span>
                                                <h4 class="mb-3">
                                                <?php
                                                    $sql = "SELECT COUNT(id) as u_count FROM `users` WHERE website='zyclyx'";
                                                    $result = $link->query($sql);

                                                    if ($result->num_rows > 0) {
                                                    // output data of each row
                                                        while($row = $result->fetch_assoc()) {                                                                                                                          
                                                            echo "<span class='counter-value' data-target='".$row['u_count']."'>0</span>";
                                                        }
                                                    } else{
                                                        echo "<span class='counter-value' data-target='0'>0</span>";
                                                    }
                                                    $link->close();
                                                    ?>          
                                                </h4>
                                            </div>
                                            
                                        </div>
 
                                    </div><!-- end card body -->
                                </div><!-- end card -->
                            </div><!-- end col -->    
                        </div><!-- end row-->

                   
                <!-- end row -->
            </div>
            <!-- container-fluid -->
        </div>
        <!-- End Page-content -->

        <?php include 'layouts/footer.php'; ?>
    </div>
    <!-- end main content-->

</div>
<!-- END layout-wrapper -->

<!-- Right Sidebar -->
<?php include 'layouts/right-sidebar.php'; ?>
<!-- /Right-bar -->

<!-- JAVASCRIPT -->
<?php include 'layouts/vendor-scripts.php'; ?>

<!-- apexcharts -->
<script src="assets/libs/apexcharts/apexcharts.min.js"></script>

<!-- Plugins js-->
<script src="assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js"></script>
<script src="assets/libs/admin-resources/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js"></script>

<!-- dashboard init -->
<script src="assets/js/pages/dashboard.init.js"></script>

<!-- App js -->
<script src="assets/js/app.js"></script>

</body>

</html>