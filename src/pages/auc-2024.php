<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

?>
<?php

include('new-header-2.php'); ?>	

<link rel="stylesheet" href="/pyf/style.css">
<link rel="stylesheet" href="/pyf/uikit.min.css">
<style type="text/css">
.bydryru {
    clear: both;
}
.submit_btn {
    background: #FC471E;
    border-radius: 7px;
    color: white !important;
    padding: 10px 0px;
    border: none;
    width: 100%;
    display: block;
    max-width: 220px;
    margin: 10px auto;
}
.subscription h4 {
    color: white;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 600;
}
.topRightBar {
    float: right;
    padding: 0;
}
.topRightBar ul li {
    margin: 5px;
}
.topRightBar ul li a {
    color: white;
}

.kill_start {
    display: none;
    width: 100%;
    background-color: #316834;
    padding: 10px 12px;
}

.mera_l {
    float: left;
    width: 50%;
}
.mobile_logo {
    width: 60px;
    padding: 10px 0;
}
.mobile_nav_btn {
    padding: 30px 0;
    float: right;
    width: 20px;
}
.mobile_nav_st {
    background-color: #222;
    display: none;
}
.mobile_nav_st ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
}
.mobile_nav_st ul li {
    float: none;
}
.mobile_nav_st ul li a {
    text-decoration: none;
    display: block;
    padding: 11px 22px;
    color: #fff;
}
.mobile_nav_st ul li a:hover {
    color: #fff;
    background-color: green;
}
/* Checkbox styling */
input[type="checkbox"] {
    width: 18px;
    height: 18px;
    margin: 5px 10px 5px 0;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid #ccc;
}
input[type="checkbox"]:checked {
    background-color: #FC471E;
}
/* Reduce spacing between form lines */
form .form-group {
    margin-bottom: 10px;
}
form label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}
/* 752 */
@media (max-width: 752px) {
    .kill_end {
        display: none;
    }
    .kill_start {
        display: block;
    }
}

.uk-checkbox {
        border: 2px solid #4CAF50; /* Green border color */
        padding: 5px;
        border-radius: 5px;
        background-color: #f0f0f0; /* Light background for contrast */
    }
    
    .uk-checkbox:checked {
        background-color: #4CAF50; /* Green background when checked */
        border-color: #388E3C; /* Darker green border when checked */
    }

    .uk-form-controls label {
        display: inline-block;
        margin-bottom: 10px;
        font-weight: bold;
    }
</style>

</head>


<section uk-height-match=".h_match">
	<div class="uk-grid uk-child-width-1-2@s uk-grid-collapse" style=" background: url('/pyf/wp-content/uploads/2018/06/figure3.png');">
		<div class="uk-float-right h_match" style="width: 80%; margin: 30px auto;">
            <style>
						/* Container styles */
						.container-2 {
							display: flex;
							justify-content: center; /* Horizontally center */
							align-items: center; /* Vertically center */
							margin: 60px 0;
						}

						/* Image styles */
						.centered-image img {
							max-width: 100%;
							max-height: 100%;
							display: block;
							margin: 0 ; /* Horizontally center within the container */
						}
			</style>
			<div class="container-2">
				<div class="centered-image">
					<img src="https://acpkhi.com/events/1920x811%20Slider%20AUC%20(1).webp" alt="Centered Image">
				</div>
			</div>
            
            <div class="form">
    <center>
        <h2>World Culture Festival & Summit 2025<br>Artist Registration Form</h2>
        <p>Please fill out the form accurately to be considered for participation in the festival.</p>
    </center>

    <form method="post" id="artist_form" enctype="multipart/form-data" action="auc-2024.php" class="uk-form-stacked uk-margin-medium-top">
        <div class="fields uk-margin-top">
            <h3>Personal Information</h3>
            <div class="uk-grid uk-grid-small">
                <div class="uk-width-1-3@s">
                    <div class="uk-margin">
                        <label class="uk-form-label">Full Name:</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" required name="name" type="text" placeholder="Full Name">
                        </div>
                    </div>
                </div>
                <div class="uk-width-1-3@s">
                    <div class="uk-margin">
                        <label class="uk-form-label">Date of Birth:</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" required name="age" type="date">
                        </div>
                    </div>
                </div>
                <div class="uk-width-1-3@s">
                    <div class="uk-margin">
                        <label class="uk-form-label">Email:</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" required name="email" type="email">
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div class="uk-grid uk-grid-small">
                <div class="uk-width-1-3@s">
                    <div class="uk-margin">
                        <label class="uk-form-label">Nationality:</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" required name="nationality" type="text" placeholder="Nationality">
                        </div>
                    </div>
                </div>
                <div class="uk-width-1-3@s">
                    <div class="uk-margin">
                        <label class="uk-form-label">Country of Residence:</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" required name="residence" type="text" placeholder="Country of Residence">
                        </div>
                    </div>
                </div>

                <div class="uk-width-1-3@s">
                    <div class="uk-margin">
                        <label class="uk-form-label">Profile Picture:</label>
                        <div class="uk-form-controls">
                            <input class="uk-input" required name="profile_pic" type="file" placeholder="profile_pic">
                        </div>
                    </div>
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">Artist Bio (200 Words):</label>
                <div class="uk-form-controls">
                    <textarea class="uk-textarea" required name="artist_bio" rows="5" placeholder="Provide a short artist bio"></textarea>
                </div>
            </div>

            <h3>Educational Background</h3>
            <div class="uk-margin">
                <label class="uk-form-label">Professional Education:</label>
                <textarea class="uk-textarea" name="professional_education" rows="3" placeholder="Include degrees, institutions, and years of completion"></textarea>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">Arts-Related Education (if any):</label>
                <textarea class="uk-textarea" name="arts_education" rows="3" placeholder="Include certifications, mentors, and years of completion"></textarea>
            </div>

            <h3>Professional Information</h3>
            <div class="uk-margin">
                <label class="uk-form-label">Are you associated with any art organization? (Yes/No):</label>
                <select class="uk-select" name="organization_association">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">If yes, provide the name of the organization:</label>
                <input class="uk-input" name="organization_name" type="text" placeholder="Organization Name">
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">Tell us about the organization (120 words):</label>
                <textarea class="uk-textarea" name="organization_description" rows="3" placeholder="Describe the organization"></textarea>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">Will you be representing this organization at the festival?</label>
                <select class="uk-select" name="represent_organization">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

            <h3>Skills</h3>
            <div class="uk-margin">
                <label class="uk-form-label">Primary Skill:</label>
                <select class="uk-select" name="primary_skill" required>
                    <option value="Music">Music</option>
                    <option value="Theatre">Theatre</option>
                    <option value="Dance">Dance</option>
                    <option value="Film">Film</option>
                    <option value="Visual Arts">Visual Arts</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">Secondary Skill (if any):</label>
                <select class="uk-select" name="secondary_skill">
                    <option value="None">None</option>
                    <option value="Music">Music</option>
                    <option value="Theatre">Theatre</option>
                    <option value="Dance">Dance</option>
                    <option value="Film">Film</option>
                    <option value="Visual Arts">Visual Arts</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <h3>Performance Details</h3>
            <div class="uk-grid uk-grid-small">
                <div class="uk-width-1-3@s">
                    <div class="uk-margin">
                        <label class="uk-form-label">Performance Name:</label>
                        <input class="uk-input" name="performance_name" type="text" placeholder="Performance Name">
                    </div>
                </div>
                <div class="uk-width-1-3@s">
                    <div class="uk-margin">
                        <label class="uk-form-label">Type:</label>
                        <input class="uk-input" name="performance_type" type="text" placeholder="Type of Performance">
                    </div>
                </div>
                <div class="uk-width-1-3@s">
                    <div class="uk-margin">
                        <label class="uk-form-label">Genre:</label>
                        <input class="uk-input" name="performance_genre" type="text" placeholder="Genre">
                    </div>
                </div>
            </div>
            <div class="uk-grid uk-grid-small">
                <div class="uk-width-1-2@s">
                    <div class="uk-margin">
                        <label class="uk-form-label">Duration (in minutes):</label>
                        <input class="uk-input" name="performance_duration" type="number" placeholder="Duration">
                    </div>
                </div>
                <div class="uk-width-1-2@s">
                    <div class="uk-margin">
                        <label class="uk-form-label">Language:</label>
                        <input class="uk-input" name="performance_language" type="text" placeholder="Language">
                    </div>
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">Brief Description of the Performance (150 words):</label>
                <textarea class="uk-textarea" name="performance_description" rows="4"></textarea>
            </div>

            <h3>Experience in Public Speaking, Panels, and Workshops</h3>
            <div class="uk-margin">
                <label class="uk-form-label">Have you participated in any of the following activities? (Select all that apply):</label>
                <div class="uk-form-controls">
                    <label><input class="uk-checkbox" name="activities[]" type="checkbox" value="Public speaking"> Public speaking</label><br>
                    <label><input class="uk-checkbox" name="activities[]" type="checkbox" value="Panel discussions"> Panel discussions</label><br>
                    <label><input class="uk-checkbox" name="activities[]" type="checkbox" value="Workshops"> Delivering workshops</label><br>
                    <label><input class="uk-checkbox" name="activities[]" type="checkbox" value="None"> None of the above</label>
                </div>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">Details about participation (if applicable, 150 words):</label>
                <textarea class="uk-textarea" name="activity_details" rows="4"></textarea>
            </div>

            <h3>Funding and Participation</h3>
            <div class="uk-margin">
                <label class="uk-form-label">Do you agree to fund your travel and accommodation costs? (Yes/No):</label>
                <select class="uk-select" name="funding_agreement">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">If you require financial support, please specify:</label>
                <textarea class="uk-textarea" name="financial_support" rows="4"></textarea>
            </div>

            <h3>Additional Information</h3>
            <div class="uk-margin">
                <label class="uk-form-label">Links to Portfolio or Past Performances:</label>
                <input class="uk-input" name="portfolio_links" type="text" placeholder="Website/Portfolio">
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">Social Media/YouTube:</label>
                <input class="uk-input" name="social_media_links" type="text" placeholder="Social Media/YouTube">
            </div>
            <div class="uk-margin">
                <label class="uk-form-label">Any Other Information You Would Like to Share:</label>
                <textarea class="uk-textarea" name="additional_info" rows="4"></textarea>
            </div>

            <h3>Acknowledgement</h3>
            <div class="uk-margin">
                <label><input class="uk-checkbox" required name="acknowledgement" type="checkbox"> I certify that all information provided is accurate and complete.</label><br>
                <label><input class="uk-checkbox" required name="rules_agreement" type="checkbox"> I agree to abide by the rules and guidelines of the World Culture Festival & Summit 2025.</label><br>
                <label><input class="uk-checkbox" required name="activities_agreement" type="checkbox"> I agree to provide all required materials, including tech riders, social media engagement materials, and participate in media and public engagements.</label>
            </div>

            <div class="uk-margin">
                <center>
                    <input type="submit" name="submit" value="Submit" class="submit_btn btn btn-success" style="padding: 15px 20px; background-color: #fad03b; color: #000 !important;">
                </center>
           

</div>
</div>

<!-- <script>
function trackRegistrationEvent() {
// Trigger the Facebook Pixel registration event
fbq('track', 'CompleteRegistration');
// Optionally, you can also redirect the user after tracking the event
// window.location.href = 'thankyou.php';
}
</sc<?php  
require_once 'qr-code/connection.php';  
require_once 'qr-code/phpqrcode/qrlib.php';  

// Enable error reporting  
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);  

$path = 'images12/';  
$timestamp = time();  
$qrcode = $path . $timestamp . ".png";  
$dataString = "";  

if (isset($_REQUEST['sbt-btn'])) {  
    // Sanitize and validate input data  
    $name = mysqli_real_escape_string($connection, $_REQUEST['name']);  
    $email = filter_var($_REQUEST['email'], FILTER_VALIDATE_EMAIL);  
    $age = (int) $_REQUEST['age'];  
    $nationality = mysqli_real_escape_string($connection, $_REQUEST['nationality']);  
    $residence = mysqli_real_escape_string($connection, $_REQUEST['residence']);  
    $artist_bio = mysqli_real_escape_string($connection, $_REQUEST['artist_bio']);  
    $professional_education = mysqli_real_escape_string($connection, $_REQUEST['professional_education']);  
    $arts_education = mysqli_real_escape_string($connection, $_REQUEST['arts_education']);  
    $organization_association = mysqli_real_escape_string($connection, $_REQUEST['organization_association']);  
    $organization_name = mysqli_real_escape_string($connection, $_REQUEST['organization_name']);  
    $organization_description = mysqli_real_escape_string($connection, $_REQUEST['organization_description']);  
    $represent_organization = mysqli_real_escape_string($connection, $_REQUEST['represent_organization']);  
    $primary_skill = mysqli_real_escape_string($connection, $_REQUEST['primary_skill']);  
    $performance_name = mysqli_real_escape_string($connection, $_REQUEST['performance_name']);  
    $performance_type = mysqli_real_escape_string($connection, $_REQUEST['performance_type']);  
    $performance_genre = mysqli_real_escape_string($connection, $_REQUEST['performance_genre']);  
    $performance_duration = mysqli_real_escape_string($connection, $_REQUEST['performance_duration']);  
    $performance_language = mysqli_real_escape_string($connection, $_REQUEST['performance_language']);  
    $performance_description = mysqli_real_escape_string($connection, $_REQUEST['performance_description']);  
    $activities = implode(", ", $_REQUEST['activities']); // for the checkbox array  
    $funding_agreement = mysqli_real_escape_string($connection, $_REQUEST['funding_agreement']);  
    $financial_support = mysqli_real_escape_string($connection, $_REQUEST['financial_support']);  
    $portfolio_links = mysqli_real_escape_string($connection, $_REQUEST['portfolio_links']);  
    $social_media_links = mysqli_real_escape_string($connection, $_REQUEST['social_media_links']);  
    $additional_info = mysqli_real_escape_string($connection, $_REQUEST['additional_info']);  
    $acknowledgement = mysqli_real_escape_string($connection, $_REQUEST['acknowledgement']);  
    $rules_agreement = mysqli_real_escape_string($connection, $_REQUEST['rules_agreement']);  
    $activities_agreement = mysqli_real_escape_string($connection, $_REQUEST['activities_agreement']);  
    $date = date("d-m-Y");  

    // Handle profile picture upload  
    $profilePicPath = 'wcsf_2025_profile_pics/';  
    $profilePicName = $timestamp . "_" . $_FILES['profile_pic']['name'];  
    $profilePicFullPath = $profilePicPath . $profilePicName;  

    if (!move_uploaded_file($_FILES['profile_pic']['tmp_name'], $profilePicFullPath)) {  
        echo '<script>alert("Failed to upload profile picture. Please try again.");</script>';  
        exit;  
    }  

    // Generate a unique code  
    $uniqueCode = uniqid('', true);  
    $dataString = "$uniqueCode\n";  

    // Generate a 6-digit OTP  
    $otp = rand(100000, 999999);  
    $otp_expiry = date("Y-m-d H:i:s", strtotime("+20 minutes"));  

    // Check if email already exists  
    $checkEmailQuery = $connection->prepare("SELECT email FROM wcfs_artist_form_2025 WHERE email = ?");  
    $checkEmailQuery->bind_param("s", $email);  
    $checkEmailQuery->execute();  
    $result = $checkEmailQuery->get_result();  

    if ($result->num_rows > 0) {  
        echo '<script>alert("Dear participant, your email already exists.");</script>';  
    } else {  
        // Insert data into the database with OTP  
        try {  
            $query = $connection->prepare(  
                "INSERT INTO wcfs_artist_form_2025 (  
                    name, email, age, nationality, residence, profile_pic, artist_bio,   
                    professional_education, arts_education, organization_association,   
                    organization_name, organization_description, represent_organization,   
                    primary_skill, performance_name, performance_type, performance_genre,   
                    performance_duration, performance_language, performance_description,   
                    activities, funding_agreement, financial_support, portfolio_links,   
                    social_media_links, additional_info, acknowledgement, rules_agreement,   
                    activities_agreement, qrimage, a_date, uniqueCode, otp, otp_expiry  
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");  

            $query->bind_param(  
                "ssissssssssssssssssssssssssssss",   
                $name, $email, $age, $nationality, $residence, $profilePicFullPath, $artist_bio,   
                $professional_education, $arts_education, $organization_association, $organization_name,   
                $organization_description, $represent_organization, $primary_skill, $performance_name,   
                $performance_type, $performance_genre, $performance_duration, $performance_language,   
                $performance_description, $activities, $funding_agreement, $financial_support,   
                $portfolio_links, $social_media_links, $additional_info, $acknowledgement,   
                $rules_agreement, $activities_agreement, $qrcode, $date, $uniqueCode, $otp, $otp_expiry  
            );  
            $query->execute();  

            if ($query->affected_rows > 0) {  
                // Send OTP email  
                include 'email_otp.php'; // Include the email verification script  

                echo '<script>alert("OTP has been sent to your email. Please verify."); window.location.href="verify_otp.php?email=' . $email . '";</script>';  
            } else {  
                echo '<script>alert("Failed to register. Kindly check your data and register again.");</script>';  
            }  
        } catch (mysqli_sql_exception $e) {  
            echo "Error: " . $e->getMessage();  
        }  
    }  
}  
?>  











</form>
			</div>
		</div>
	</div>
</section>





		
		<!---Footer Start----------->
		<?php include "new_footer.php"; ?>
		<!--Footer End--------------->
		<script type="module" src="page-file/topbar-base.js"></script>
		<script src="page-file/jquery-1.12.4.min.js"></script>
		<script src="page-file/all.min.js"></script>
	</body>
</html>