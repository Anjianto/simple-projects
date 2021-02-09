<script>
  import Button from "../components/Button.svelte";

  const menus = ["Home", "Features", "Pricing", "Showcase"];
</script>

<header class="site-header">
  <div class="container">
    <div class="site-header-inner">
      <div class="brand">
        <h1 class="m-0">
          <a href="index.html">
            <img src="/images/logo.svg" alt="Cube" width="32" height="32" />
          </a>
        </h1>
      </div>
      <button
        id="header-nav-toggle"
        class="header-nav-toggle"
        aria-controls="primary-menu"
        aria-expanded="false">
        <span class="screen-reader">Menu</span>
        <span class="hamburger"><span class="hamburger-inner" /></span>
      </button>
      <nav id="header-nav" class="header-nav">
        <div class="header-nav-inner">
          <ul class="list-reset text-xxs header-nav-right">
            {#each menus as menu}
              <li><a href="/">{menu}</a></li>
            {/each}
          </ul>
          <ul class="list-reset header-nav-right">
            <li>
              <Button isButtonWideMobile isButtonSm to="/">Sign up</Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</header>
