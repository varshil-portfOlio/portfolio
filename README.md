<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Portfolio Gallery</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #0f172a;
      color: #fff;
      padding: 20px;
    }

    /* Grid container */
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
    }

    /* Image styling */
    .gallery img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      object-fit: cover;
      box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      transition: transform 0.3s ease;
      cursor: pointer;
    }

    .gallery img:hover {
      transform: scale(1.05);
    }

    /* Responsive padding */
    @media (max-width: 600px) {
      body {
        padding: 10px;
      }
    }
  </style>
</head>
<body>

  <h1 style="text-align:center; margin-bottom:20px;">My Portfolio</h1>

  <div class="gallery">
    <img src="1.jpg" alt="">
    <img src="img/22.jpg" alt="">
    <img src="img/2.png" alt="">
    <img src="img/3.jpg" alt="">
    <img src="img/4.png" alt="">
    <img src="img/5.png" alt="">
    <img src="img/6.png" alt="">
    <img src="7.png" alt="">
    <img src="8.png" alt="">
    <img src="395.png" alt="">
    <img src="396.png" alt="">
    <img src="img/9.png" alt="">
    <img src="img/10.png" alt="">
    <img src="img/11.png" alt="">
    <img src="img/13.png" alt="">
    <img src="img/15.png" alt="">
    <img src="16.png" alt="">
    <img src="17.png" alt="">
    <img src="18.png" alt="">
    <img src="19.jpg" alt="">
    <img src="20.png" alt="">
    <img src="img/21.png" alt="">
  </div>

</body>
</html>
