<script>
  import Card from "../components/Card.svelte";

  export let pricing = [];
</script>

<section class="pricing section">
  <div class="container">
    <div class="pricing-inner section-inner has-top-divider">
      <div class="section-header center-content">
        <div class="container-xs">
          <h2 class="mt-0 mb-16">Simple, transarent pricing</h2>
          <p class="m-0">
            Lorem ipsum is common placeholder text used to demonstrate the
            graphic elements of a document or visual presentation.
          </p>
        </div>
      </div>
      <div class="tiles-wrap">
        {#each pricing as price}
          <Card {price} />
        {/each}
      </div>
    </div>
  </div>
</section>
