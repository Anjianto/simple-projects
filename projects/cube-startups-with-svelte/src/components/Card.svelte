<script>
  import Button from "./Button.svelte";
  import List from "./List.svelte";

  export let price = {};
  export let index = 0
</script>

<div class="tiles-item" data-aos="fade-up" data-aos-delay={200+100*index}>
  <div class="tiles-item-inner has-shadow">
    <div class="pricing-item-content">
      <div class="pricing-item-header pb-24 mb-24">
        <div class="pricing-item-price mb-4">
          <span
            class="pricing-item-price-currency h2">{price?.currency ?? '$'}</span><span
            class="pricing-item-price-amount h1 pricing-switchable"
            data-pricing-monthly={price?.pricing?.monthly ?? 0}
            data-pricing-yearly={price?.pricing?.yearly ?? 0}>{price?.pricing?.yearly ?? 0}</span>
        </div>
        <div class="text-xs text-color-low">
          {price?.sub_pricing ?? 'Short Description'}
        </div>
      </div>
      <div class="pricing-item-features mb-40">
        <div
          class="pricing-item-features-title h6 text-xs text-color-high mb-24">
          What’s included
        </div>
        {#if price?.services && price?.services?.length > 0}
          <ul class="pricing-item-features-list list-reset text-xs mb-32">
            {#each price?.services as service}
              <List item={service} />
            {/each}
          </ul>
        {/if}
      </div>
    </div>
    <div class="pricing-item-cta mb-8">
      <Button isButtonBlock to="/">Start free trial</Button>
    </div>
  </div>
</div>
