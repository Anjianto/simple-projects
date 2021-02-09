<script>
  import Section from "../components/Section.svelte";

  export let clients = [];
</script>

<Section className="clients">
  <div class="container">
    <div class="clients-inner section-inner has-top-divider has-bottom-divider">
      <ul class="list-reset">
        {#each clients as client,index (client.alternative)}
          <li><img src="{client.image}" alt="{client.alternative}" data-aos="zoom-in" data-aos-delay={200+100*index}/></li>
        {/each}
      </ul>
    </div>
  </div>
</Section>
