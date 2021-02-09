<script>
  import Header from "../parts/Header.svelte";
  import Hero from "../parts/Hero.svelte";
  import Clients from "../parts/Clients.svelte";
  import Features from "../parts/Features.svelte";
  import Pricing from "../parts/Pricing.svelte";
import Footer from "../parts/Footer.svelte";

  const clients = [
    {
      image: "/images/clients-01.svg",
      alternative: "Clients-01",
    },
    {
      image: "/images/clients-02.svg",
      alternative: "Clients-02",
    },
    {
      image: "/images/clients-03.svg",
      alternative: "Clients-03",
    },
    {
      image: "/images/clients-04.svg",
      alternative: "Clients-04",
    },
    {
      image: "/images/clients-05.svg",
      alternative: "Clients-05",
    },
  ];

  const features = [
    {
      icon: {
        name: "/images/feature-tile-icon-01.svg",
        alternative: "Feature tile icon 01",
      },
      title: "Join the system",
      short_description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      icon: {
        name: "/images/feature-tile-icon-02.svg",
        alternative: "Feature tile icon 02",
      },
      title: "Join the system",
      short_description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      icon: {
        name: "/images/feature-tile-icon-03.svg",
        alternative: "Feature tile icon 03",
      },
      title: "Join the system",
      short_description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
  ];

  const pricing = [
    {
      currency: "$",
      pricing: {
        monthly: 34,
        yearly: 27,
      },
      sub_pricing: "Lorem ipsum is a common text",
      services: [
        {
          title: "Excepteur sint occaecat velit",
          is_checked: true,
        },
        {
          title: "Excepteur sint occaecat velit",
          is_checked: true,
        },
        {
          title: "Excepteur sint occaecat velit",
          is_checked: true,
        },
        {
          title: "Excepteur sint occaecat velit",
          is_checked: false,
        },
        {
          title: "Excepteur sint occaecat velit",
          is_checked: false,
        },
      ],
    },
    {
      currency: "$",
      pricing: {
        monthly: 54,
        yearly: 47,
      },
      sub_pricing: "Lorem ipsum is a common text",
      services: [
        {
          title: "Excepteur sint occaecat velit",
          is_checked: true,
        },
        {
          title: "Excepteur sint occaecat velit",
          is_checked: true,
        },
        {
          title: "Excepteur sint occaecat velit",
          is_checked: true,
        },
        {
          title: "Excepteur sint occaecat velit",
          is_checked: true,
        },
        {
          title: "Excepteur sint occaecat velit",
          is_checked: false,
        },
      ],
    },
    {
      currency: "$",
      pricing: {
        monthly: 74,
        yearly: 67,
      },
      sub_pricing: "Lorem ipsum is a common text",
      services: [
        {
          title: "Excepteur sint occaecat velit",
          is_checked: true,
        },
        {
          title: "Excepteur sint occaecat velit",
          is_checked: true,
        },
        {
          title: "Excepteur sint occaecat velit",
          is_checked: true,
        },
        {
          title: "Excepteur sint occaecat velit",
          is_checked: true,
        },
        {
          title: "Excepteur sint occaecat velit",
          is_checked: true,
        },
      ],
    },
  ];
</script>

<div class="body-wrap">
  <Header />
  <main class="site-content">
    <Hero />
    {#if clients?.length > 0}
      <Clients clients={clients} />
    {/if}
    {#if features?.length > 0}
      <Features features={features} />
    {/if}
    {#if pricing?.length > 0}
      <Pricing pricing={pricing} />
    {/if}
  </main>
  <Footer/>
</div>
