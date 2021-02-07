<!DOCTYPE html>
<html lang="en">
   <?php $title = "Welcome to WebStudios"; include 'components/meta.php' ?>
<body>
      <?php include 'components/header.php' ?>
      <?php include 'components/hero.php' ?>

    <section id="faq" class="faq section-bg">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h2>Frequently Asked Questions</h2>
                <p>WebStudios often receives questions about how to design/set up a web site, modify existing designs or register/transfer a domain name. Some of the most frequently asked questions and answers about website hosting and design are listed below. Have a question that's not answered here? Contact WebStudios today!</p>
            </div>
            <div class="faq-list">
                <ul>

                    <?php
                        
                        include 'databse\connection.php';

                        $conn = OpenCon();

                        $sql = 'SELECT * FROM `faq`';
                        $result = mysqli_query($conn, $sql);

                        if (mysqli_num_rows($result) > 0) {

                            $count = 0;

                            while($row = mysqli_fetch_assoc($result)) {

                                $count++;

                                $faq_id = $row['faq_id'];
                                $question = $row['question'];
                                $answer = $row['answer'];

                                if ($count < 2) {
                                    $class       = "collapse show";
                                    $class_arrow = "collapse";
                                } else {
                                    $class       = "collapse";
                                    $class_arrow = "collapsed";
                                }

                    ?>
                        <li data-aos="fade-up" data-aos-delay="100">
                            <i class="bx bx-help-circle icon-help"></i> <a data-toggle="collapse" class="<?php echo $class_arrow ?>" href="#faq-list-<?php echo $faq_id ?>"><?php echo $question ?> <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-<?php echo $faq_id ?>" class="<?php echo $class ?>" data-parent=".faq-list">
                                <p>
                                    <?php echo $answer ?>
                                </p>
                            </div>
                        </li>

                    <?php 
                            }
                        } else {
                            echo "0 results";
                        }
                        mysqli_close($conn);
                    ?>
                    
                </ul>
            </div>
        </div>
    </section>

      <?php include 'components/footer.php' ?>
      
</body>
</html>