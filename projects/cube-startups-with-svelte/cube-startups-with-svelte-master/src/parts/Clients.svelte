<script>
  import Section from "../components/Section.svelte";

  export let clients = [];
</script>

<Section className="clients">
  <div class="container">
    <div class="clients-inner section-inner has-top-divider has-bottom-divider">
      <ul class="list-reset">
        {#each clients as client (client.alternative)}
          <li><img src={client.image_name} alt={`${client.alternative}`} /></li>
        {/each}
      </ul>
    </div>
  </div>
</Section>
