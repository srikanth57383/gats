<?php include 'layouts/session.php'; ?>
<?php include 'layouts/head-main.php'; ?>

<head>

    <title>Post a New Opening</title>
    <?php include 'layouts/head.php'; ?>
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
                    <div class="col-12 ">
                        <div class="page-title-box">
                            <h4 class="mb-sm-0 font-size-18 text-center">Post a New Job Opening</h4>
                            <div class="card-body">
                                <div class="row g-4 d-flex justify-content-center">
                                    <div class="col-sm-3">
                                        <div class="alert alert-success alert-dismissible fade show px-4 mb-0 text-center" role="alert">
                                            <i class="mdi mdi-check-all d-block display-4 mt-2 mb-3 text-success"></i>
                                            <h5 class="text-success">Success</h5>
                                            <p>Job Opening Created Successfully</p>
                                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>
                                    </div><!-- end col -->
                                    </div>
                            </div>
                            <div class="text-center">
                                <a href="openings.php" class="btn btn-primary">Back to Openings</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end page title -->

            </div> <!-- container-fluid -->
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

<script src="assets/js/app.js"></script>

</body>

</html>