<script>
  import Section from "../components/Section.svelte";

  export let features = [];
</script>

<Section className="features-tiles">
  <div class="container">
    <div class="features-tiles-inner section-inner">
      <div class="tiles-wrap">
        {#each features as feature, index}
          <div class="tiles-item" data-aos="fade-up" data-aos-delay={200+100*index}>
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16">
                  <img
                    src={feature?.icon?.name ?? ''}
                    alt={feature?.icon?.alternative ?? 'Feature Icon'}
                    width="64"
                    height="64" />
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="mt-0 mb-8">{feature?.title ?? 'Fetaure Name'}</h4>
                <p class="m-0 text-sm">
                  {feature?.short_description ?? 'Feature Description'}
                </p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</Section>
