<template>
  <body>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand mx-auto" href="#">KASI EAT</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link text-white active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Product</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Admin</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Contact-US</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<div class="viewport">
    <div class="overlay">
        <img class="company-logo" src="https://i.ibb.co/NWxwmv5/2-removebg-preview.png" alt="Company Logo">
        <p class="architects-daughter-regular">YOUR LAST RESORT TO HAVE THAT KASI TASTE</p>
    </div>
</div>

<div class="content">
    <h2 class="display-3 bounce-letters">Welcome to Our Website</h2>
    <p class="lead">Explore our mouthwatering meals</p>
    <div class="img-container">

        <img class="img" src="https://i.ibb.co/mJXTTBg/maxresdefault.jpg">
        <img class="img" src="https://i.ibb.co/fkLH5YC/featured-4.png">
        <img class="img" src="https://i.ibb.co/tLs0PFH/Traditional-polony-kota.jpg">
        <img class="img" src="https://i.ibb.co/DQW0RRr/images.jpg">
    </div>
</div>

<footer class="footer">
    <div class="container">
        <div class="footer-columns">
            <div class="footer-column">
                <h4>Welcome to Kasi Eat</h4>
                <p>Kasi  Eats founded in 2022-27-08 Township taste market ,has been a hub for local flavors,connecting people through a shared love for traditional food</p>
            </div>
            <div class="footer-column">
                <h4>Contact Information</h4>
                <p>123 Main Street, Cityville, KAS</p>
                <p>Operating Hours: Mon-Sat 9AM-8PM</p>
            </div>
            <div class="footer-column">
                <h4>FAQ & About Us</h4>
                <p>Frequently Asked Questions</p>
                <p>About Us: Learn more about our company and mission.</p>
            </div>
        </div>
    </div>
</footer>


</body>

</template>

    <style scoped>
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
            height: 100vh;
        }

        /* .navbar {
            height: 100px;
        } */

        .navbar-brand {
            padding-top: 20px;
            line-height: 1.5;
        }

        .navbar-dark .navbar-nav .nav-link {
            color: white !important;
        }

        .viewport {
            position: relative;
            height: 500px;
            background-image: url('https://i.pinimg.com/550x/77/15/34/77153414ce1a39b30e39f8ecf7590d5a.jpg');
            background-size: cover;
            background-position: center;
            overflow: hidden;
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(46, 96, 72, 0.452);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #fff;
        }

        .company-logo {
            width: 300px;
            height: auto;
            margin-bottom: 10px;
        }

        .architects-daughter-regular {
            font-family: "Architects Daughter", cursive;
            font-weight: 400;
            font-style: oblique;
            font-size: 25px;
        }

        .content {
            padding: 50px;
            text-align: center;
        }

        .footer {
            background-color: #333;
            color: #fff;
            padding: 30px 0;
            text-align: center;
        }

        .footer-columns {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }

        .footer-column {
            flex: 0 0 calc(33.33% - 20px);
            margin: 10px;
        }

        .footer-column h4 {
            font-size: 17px;
            margin-bottom: 15px;
        }

        .footer-column p {
            font-size: 13px;
        }
        @media only screen and (max-width: 767px) {
            .footer-column h4 {
                font-size: 14px; /* Adjust the font size as needed */
            }

            .footer-column p {
                font-size: 8px; /* Adjust the font size as needed */
            }
        }

       
        .img {
  width: 250px;
  height: 250px;
  padding: 30px;
  opacity: 0;
  transform: translateX(0);
  transition: transform 0.10s ease-in-out;
  border-radius: 15%;
}

.img:hover {
  transform: scale(1.6);
}

        .img:nth-child(odd) {
            animation: slide-in-left 3s forwards;
        }

        .img:nth-child(even) {
            animation: slide-in-right 3s forwards;
        }

        @keyframes slide-in-left {
            from {
                opacity: 0;
                transform: translateX(-100%);
            }
            to {
                opacity: 2;
                transform: translateX(0);
            }
        }

        @keyframes slide-in-right {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 2;
                transform: translateX(0);
            }
        }

        /* Media query for larger screens */
        @media (min-width: 768px) {
            .img {
                width: 350px;
            height: 350px;
            }
        }
        .bounce-letters {
  display: inline-block;
  animation: bounce 0.7s alternate infinite;
}

@keyframes bounce {
  to {
    transform: translateY(-5px);
  }
}  
h2{
    font-family:poppins;
}

    </style>