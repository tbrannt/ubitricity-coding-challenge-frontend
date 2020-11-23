<template>
  <div class="container">
    <div>
      <div>
        <h1 class="title">Carpark Ubi Charge Management</h1>
      </div>
      <div class="charging-states">
        <p class="subtitle">Charging point info:</p>
        asdf
          <!-- <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="button--green"
          >
            Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
            class="button--grey"
          >
            GitHub
          </a> -->
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Overview',

  async asyncData ({ $axios, error }) {
    try {
      const { data } = await $axios.get('charge-connections')
      return { chargeConnectionsResponse: data }
    } catch ({ response }) {
      error({ statusCode: response.data.status, message: response.data.error })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: #355e4b;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 20px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.charging-states {
  padding-top: 15px;
}
</style>
