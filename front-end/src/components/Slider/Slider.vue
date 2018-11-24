<template>
  <section class="section slider">
    <h2 class="section-header">2. Zakoduj slajder</h2>
    <carousel :perPageCustom="[[320, 1], [768, 2], [1024, 3]]" pagination-active-color="#00c352" pagination-color="#d3d3d3" :autoplay="true" :autoplayHoverPause="true">
      <slide class="item" v-for="item in items" :key="item.name">
        <img :src="item.img" :alt="item.name" class="item-img"/>
        <h6 class="item-title">{{item.title}}</h6>
        <p class="item-description">{{item.description}}</p>
      </slide>
    </carousel>
  </section>
</template>

<script>

export default {
  name: "Slider",
  data: () => ({
    items: [
      {
        title: 'Slajder #1',
        description: 'lorem ipsum dolor sit amen',
        img: require('../../assets/1.jpg')
      },
      {
        title: 'Slajder #2',
        description: 'lorem ipsum dolor sit amen',
        img: require('../../assets/2.jpg')
      },
      {
        title: 'Slajder #3',
        description: 'lorem ipsum dolor sit amen',
        img: require('../../assets/3.jpg')
      },
      {
        title: 'Slajder #4',
        description: 'lorem ipsum dolor sit amen',
        img: require('../../assets/2.jpg')
      },
      {
        title: 'Slajder #5',
        description: 'lorem ipsum dolor sit amen',
        img: require('../../assets/3.jpg')
      },
      {
        title: 'Slajder #6',
        description: 'lorem ipsum dolor sit amen',
        img: require('../../assets/1.jpg')
      },
    ]
  })
}

</script>

<style lang="scss" src="./Slider.scss"></style>