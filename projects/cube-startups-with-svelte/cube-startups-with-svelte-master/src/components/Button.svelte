<script>
  export let isButtonWideMobile = false;
  export let isButtonSm = false;
  export let isButtonBlock = false;
  export let to = "/";

  let classNames = [];
  if (isButtonWideMobile) classNames.push("button-wide-mobile");
  if (isButtonSm) classNames.push("button-sm");
  if (isButtonBlock) classNames.push("button-block");
</script>

<a class={`button button-primary${' ' + classNames.join(' ')}`} href={to}>
  <slot />
</a>
