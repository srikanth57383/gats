<?php include 'layouts/config.php'; ?>
<?php include 'layouts/session.php'; ?>
<?php include 'layouts/head-main.php'; ?>

<head>

    <title>Job Description</title>
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

                <?php
                if(isset($_GET['id'])){                                          
                    $id = $_GET['id'];
                    
                                            $sql = "SELECT * FROM careers WHERE website='zyclyx' and id='$id' ";
                                            $result = $link->query($sql);

                                            if ($result->num_rows > 0) {
                                            // output data of each row
                                                while($row = $result->fetch_assoc()) {
                                                                                                  
                                                    $title = $row["title"];
                                                    $department = $row["department"];
                                                    $type = $row["type"];
                                                    $location = $row["location"];                                                 
                                                    $experience = $row["experience"];                                                
                                                    $vacancies = $row["vacancies"];                                                
                                                    $status = $row["is_active"];
                                                    $requirements = $row["requirements"];                                                      
                                                }
                                            }
                                            $link->close(); 
                                            ?>

                <!-- start page title -->
                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                            <h4 class="mb-sm-0 font-size-18"><?php echo $title; ?></h4>
                            <a href="openings.php" class="btn btn-primary"><i class="fas fa-arrow-left"></i> <span class="mr-3"> &nbsp; &nbsp;Back To Openings</span></a>
                        </div>

                    </div>
                    <div class="col-md-3 card pt-2">
                        <p>Department : <strong class="text-capitalize"><?php echo $department; ?></strong></p>
                    </div>
                    <div class="col-md-3 card pt-2">
                        <p>Location & Job Type : <strong class="text-capitalize"><?php echo $location; ?></strong>, <strong class="text-capitalize"><?php echo $type; ?></strong></p>
                    </div>
                    <div class="col-md-3 card pt-2">
                    <p>Experience : <strong class="text-capitalize"><?php echo $experience; ?></strong></p>                        
                    </div>
                    <div class="col-md-3 card pt-2">
                    <p>Vacancies : <strong class="text-capitalize"><?php echo $vacancies; ?></p>
                    </div>
                    <div class="col-12">
                        <h4 class="my-3">Job Description</h4>
                        <?php 
                            echo $requirements;
                        ?>
                    </div>
                </div>
                <!-- end page title -->

            </div> <!-- container-fluid -->
        </div>
        <!-- End Page-content -->

        <?php                                                                                       
                }
            ?>
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