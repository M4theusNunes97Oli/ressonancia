<template>
  <div>
    <q-card class="bg-light-blue-7 fullscreen">
      <q-card-section>
        <div>
          <q-img
          src="/statics/img/scaanCT_black.png"
          class="logoI"
          />
        </div>
        <div class="buttonI">
          <q-btn color="amber-13" text-color="black" icon-right="send" label="COMEÇAR" to="form"/>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.logoI{
  width: 70vw;
  margin-left: 11.2vw;
  margin-top: 6vh;  
}

.buttonI{
  margin-left: 27.5vw;
  margin-top: 10vh;  
}
</style>