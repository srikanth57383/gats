<?php include 'layouts/config.php'; ?>
<?php include 'layouts/session.php'; ?>
<?php include 'layouts/head-main.php'; ?>

<head>

    <title>Inquiries | zyclyx Technologies</title>
    <?php include 'layouts/head.php'; ?>

    <!-- DataTables -->
    <link href="assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/libs/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css" rel="stylesheet"
        type="text/css" />

    <!-- Responsive datatable examples -->
    <link href="assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css" rel="stylesheet"
        type="text/css" />
    <link href="assets/libs/sweetalert2/sweetalert2.min.css" rel="stylesheet" type="text/css" />
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
                            <h4 class="mb-sm-0 font-size-18">Openings</h4>
                            <a href="new-opening.php" class="btn btn-primary">Add Opening</a>
                        </div>
                    </div>
                </div>
                <!-- end page title -->

                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header d-flex align-items-center justify-content-between">
                                <h4 class="card-title">Job Openings at zyclyx</h4>
                            </div>
                            <div class="card-body">

                                <table id="datatable" class="table table-bordered dt-responsive  nowrap w-100">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Department</th>
                                            <th>Type</th>
                                            <th>Location</th>
                                            <th>Experience</th>
                                            <th>Vacancies</th>
                                            <th>Status</th>
                                            <th>Change Status To</th>
                                            <th>View</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                            $sql = "SELECT * FROM careers WHERE website='zyclyx'";
                                            $result = $link->query($sql);

                                            if ($result->num_rows > 0) {
                                            // output data of each row
                                                while($row = $result->fetch_assoc()) {
                                                    
                                                    echo "<tr>\n";
                                                    echo "    <td>".$row["title"]."</td>\n";
                                                    echo "    <td>".$row["department"]."</td>\n";
                                                    echo "    <td>".$row["type"]."</td>\n";
                                                    echo "    <td>".$row["location"]."</td>\n";                                                 
                                                    echo "    <td>".$row["experience"]."</td>\n";                                                
                                                    echo "    <td>".$row["vacancies"]."</td>\n";                                                
                                                    
                                                    if($row["is_active"] == 1){
                                                        echo "<td class='text-center'><span class='badge bg-success'>Open</span></td>\n"; 
                                                    } else{
                                                        echo "<td class='text-center'><span class='badge bg-danger'>Closed</span></td>\n"; 
                                                    }

                                                    if($row["is_active"] == 1){
                                                        echo "<td class='text-center'><button class='btn btn-warning' id='statusClose' data-id='".$row["id"]."'>Close</button></td>\n"; 
                                                    } else{
                                                        echo "<td class='text-center'><button class='btn btn-success' id='statusOpen' data-id='".$row["id"]."'>Open</button></td>\n"; 
                                                    }                                                                                                        
                                                    echo "<td class='text-center'><a class='btn btn-primary' href='opening-description.php?id=".$row["id"]."'>view</a></td>\n"; 
                                                    echo "<td class='text-center'><button class='btn btn-danger' data-id='".$row["id"]."' id='deletePost'>Delete</button></td>\n";
                                                }
                                            }
                                            $link->close();
                                        ?>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div> <!-- end col -->
                </div> <!-- end row -->
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

<!-- Required datatable js -->
<script src="assets/libs/datatables.net/js/jquery.dataTables.min.js"></script>
<script src="assets/libs/datatables.net-bs4/js/dataTables.bootstrap4.min.js"></script>
<!-- Buttons examples -->
<script src="assets/libs/datatables.net-buttons/js/dataTables.buttons.min.js"></script>
<script src="assets/libs/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js"></script>
<script src="assets/libs/jszip/jszip.min.js"></script>
<script src="assets/libs/pdfmake/build/pdfmake.min.js"></script>
<script src="assets/libs/pdfmake/build/vfs_fonts.js"></script>
<script src="assets/libs/datatables.net-buttons/js/buttons.html5.min.js"></script>
<script src="assets/libs/datatables.net-buttons/js/buttons.print.min.js"></script>
<script src="assets/libs/datatables.net-buttons/js/buttons.colVis.min.js"></script>

<!-- Responsive examples -->
<script src="assets/libs/datatables.net-responsive/js/dataTables.responsive.min.js"></script>
<script src="assets/libs/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js"></script>

<!-- Datatable init js -->
<script src="assets/js/pages/datatables.init.js"></script>
<!-- Sweet Alerts js -->
<script src="assets/libs/sweetalert2/promise-polyfill.js"></script>
<script src="assets/libs/sweetalert2/sweetalert2.min.js"></script>
<script src="assets/js/app.js"></script>

<script>
            // base url for the API
           <?php     
                 $protocol = (!empty($_SERVER['HTTPS'])) ? 'https' : 'http';                            
                 $base_url=$protocol."://".$_SERVER['SERVER_NAME'].dirname($_SERVER["REQUEST_URI"].'?').'/api/';                                 
                 print "var base_url ='$base_url'"
            ?>

$(document).ready(function() {
    //  Change status to Open
    $("#datatable").on("click", "#statusOpen", function(e) {
        var id = $(this).data('id');
        Swal.fire({
            title: "Are you sure?",
            text: "You Want to change the status to Open",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#2ab57d",
            cancelButtonColor: "#fd625e",
            confirmButtonText: "Yes, Open it!"
        }).then(function(result) {
            if (result.value) {
                $.ajax({
                    dataType: 'json',
                    type: 'POST',
                    url: base_url+'update_status.php',
                    data: {
                        id: id,
                        action: 'open'
                    }
                }).done(function(data) {
                    Swal.fire("Updated!", "Your job post has been updated as Open.","success").then(function(){
                        location.reload()
                    })
                });

            }
        });
    })
    //  Change status to Close
    $("#datatable").on("click", "#statusClose", function(e) {
        var id = $(this).data('id');
        Swal.fire({
            title: "Are you sure?",
            text: "You Want to change the status to Close",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#2ab57d",
            cancelButtonColor: "#fd625e",
            confirmButtonText: "Yes, Close it!"
        }).then(function(result) {
            if (result.value) {
                $.ajax({
                    dataType: 'json',
                    type: 'POST',
                    url: base_url+'update_status.php',
                    data: {
                        id: id,
                        action: 'close'
                    }
                }).done(function(data) {
                    Swal.fire("Updated!", "Your job post has been updated as Close.","success").then(function(){
                        location.reload()
                    })
                });
            }
        });
    })

        //  Delete Opening
        $("#datatable").on("click", "#deletePost", function(e) {
        var id = $(this).data('id');
        Swal.fire({
            title: "Are you sure?",
            text: "You Want to Delete the job post",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#2ab57d",
            cancelButtonColor: "#fd625e",
            confirmButtonText: "Yes, Delete it!"
        }).then(function(result) {
            if (result.value) {
                $.ajax({
                    dataType: 'json',
                    type: 'POST',
                    url: base_url+'delete_job.php',
                    data: {
                        id: id                         
                    }
                }).done(function(data) {
                    Swal.fire("Updated!", "Your job post has been Deleted.","success").then(function(){
                        location.reload()
                    })
                });
            }
        });
    })
})
</script>

</body>

</html>