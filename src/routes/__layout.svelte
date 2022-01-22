<script>
  import './layout.css';

  let taglines = [
    "musical code golf",
    "musical creative coding",
    "minimal music",
    "tiny tunes",
    "64 byte beats",
    "♪ ♫",
    "quality of a tone or sound",
    "code your next masterpiece"
  ];
</script>

<div class="container">
  <div></div>
  <div>
    <slot/>
  </div>
  <footer class="footer">
    made by <a href="https://github.com/paullj">paullj</a>.
    heavily inspired by <a href="https://tixy.land">tixy.land</a>
  </footer>
</div>

<svelte:head>
  <title>
    timb(re) - {taglines[Math.floor(Math.random()*taglines.length)]}
  </title>
</svelte:head>

<style>
  .container {
    position: relative;
    max-width: 64ch;
    min-height: 100%;
    display: grid;
    align-items: center;
    grid-template-rows: auto 1fr auto;
  }
  .footer {
    width: 100%;
    text-align: center;
    padding: 20px 0px;
  }
  a,
  a::selection {
    color: red;
    background: none;
  }
  a:active {
    background: blue;
    color: white;
  }
  a:hover {
    background: red;
    color: white;
  }

</style>