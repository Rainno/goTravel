<template>
    <div class="">
      <city-header></city-header>
      <city-search></city-search>
      <city-list
        :cities="cities"
        :hotCities="hotCities"
        :letter="letter"
      ></city-list>
      <city-alphabet
        :cities="cities"
        @change="handleLetterChange"
      ></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'

import axios from 'axios'
export default {
  name: 'city',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSuccess)
    },
    handleGetCityInfoSuccess (res) {
      res = res.data
      if (res.ret && res.data) {
        this.cities = res.data.cities
        this.hotCities = res.data.hotCities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
