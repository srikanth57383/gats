<?php include 'layouts/session.php'; ?>
<?php include 'layouts/head-main.php'; ?>

<head>

    <title>Submit Job | zyclyx Technologies</title>
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
                    <div class="col-12">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0 font-size-18">Submit Job For zyclyx</h4>                             
                            <a href="openings.php" class="btn btn-primary"><i class="fas fa-arrow-left"></i> <span class="mr-4">Back To Openings</span></a>
                        </div>
                    </div>
                </div>
                <!-- end page title -->
                <form action="insert-opening.php" method="post">
                <div class="row">               
                                    <div class="col-lg-6">
                                        <div>
                                            <div class="mb-3">
                                                <label for="example-text-input" class="form-label">Job Title</label>
                                                <input class="form-control" type="text" name="job-title" id="example-text-input">
                                            </div>
                                           
                                            <div class="mb-3">
                                                <label for="example-email-input" class="form-label">Job Type</label>
                                                <input class="form-control" type="text" name="job-type" id="example-email-input">
                                            </div>     
                                            <div class="mb-3">
                                                <label for="example-email-input" class="form-label">Department</label>
                                                <input class="form-control" type="text" name="department" id="example-email-input">
                                            </div>                                                                                       

                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div>                                             
                                            <div class="mb-3">
                                                <label for="example-search-input" class="form-label">Job Location</label>
                                                <input class="form-control" type="search" name="location" id="example-search-input">
                                            </div>                                             
                                            <div class="mb-3">
                                                <label for="example-url-input" class="form-label">No of Openings</label>
                                                <input class="form-control" type="number" value='1' name="openings-count" id="example-url-input">
                                            </div>                                            
                                            <div class="mb-3">
                                                <label for="example-email-input" class="form-label">Experience</label>
                                                <input class="form-control" type="text" name="experience" id="example-email-input">
                                            </div>     
                                        </div>
                                    </div>
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Description</h4>
                                <p class="card-title-desc"></p>
                            </div>
                            <div class="card-body">
                                <textarea name="description" id="ckeditor-classic"></textarea>
                            </div>
                        </div>
                        <input type="hidden" name="source-website" value="zyclyx">
                    </div>
                    <div class="col-lg-12 text-center">
                        <button type="submit" name="submit" class="btn btn-primary mb-4 mx-auto">Post a New Opening</button>
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->
                </form>
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

<!-- ckeditor -->
<script src="assets/libs/@ckeditor/ckeditor5-build-classic/build/ckeditor.js"></script>

<!-- init js -->
<script src="assets/js/pages/form-editor.init.js"></script>

<script src="assets/js/app.js"></script>

</body>

</html>