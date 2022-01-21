<script>
  import './layout.css';

  let taglines = [
    "musical code golf",
    "musical creative coding",
    "minimal music",
    "tiny tunes",
    "64 byte beats",
    "♪ ♫",
    "code your next masterpiece"
  ];
</script>

<div class="container">
  <slot/>
  <footer class="footer">
    made by <a href="https://github.com/paullj">paullj</a>.
    inspired by <a href="https://tixy.land">tixy.land</a>
  </footer>
</div>

<head>
  <title>
    timb(re) - {taglines[Math.floor(Math.random()*taglines.length)]}
  </title>
</head>

<style>
  .container {
    position: relative;
    max-width: 64ch;
    min-height: 100%;
  }
  .footer {
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;;
    text-align: center;
    padding-bottom: 20px;
  }
</style>