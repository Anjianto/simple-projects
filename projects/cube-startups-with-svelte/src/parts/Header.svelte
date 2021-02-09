<script>
  import Button from "../components/Button.svelte";

  const menu = ["Home", "Features", "Pricing", "Showcase"];

  let isActive=false

  function showMenu(){
    isActive=!isActive

     const buttonToggle = document.getElementById("header-nav-toggle");
    const nav = document.getElementById("header-nav");
    if (isActive) {
      buttonToggle.addEventListener("click", () => {
        nav.classList.add("is-active");
        nav.style.maxHeight = "292px";
        document.body.classList.add("off-nav-is-active");
      });
    } else {
      buttonToggle.addEventListener("click", () => {
        nav.classList.remove("is-active");
        nav.style.maxHeight = "auto";
        document.body.classList.remove("off-nav-is-active");
      });
    }
  }
</script>

<header class="site-header" data-aos="fade-down">
  <div class="container">
    <div class="site-header-inner">
      <div class="brand">
        <h1 class="m-0">
          <a href="/">
            <img src="/images/logo.svg" alt="Cube" width="32" height="32" />
          </a>
        </h1>
      </div>
      <button
        id="header-nav-toggle"
        class="header-nav-toggle"
        aria-controls="primary-menu"
        aria-expanded="false"
        on:click={showMenu}
      >
        <span class="screen-reader">Menu</span>
        <span class="hamburger"><span class="hamburger-inner"></span></span>
      </button>
      <nav class="header-nav" id="header-nav">
        <div class="header-nav-inner">
          <ul class="list-reset text-xxs header-nav-right">
            {#each menu as menuName}
              <li><a href="/">{menuName}</a></li>
            {/each}
          </ul>
          <ul class="list-reset header-nav-right">
            <li>
              <Button isButtonWideMobile isButtonSm>Sign Up</Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</header>
