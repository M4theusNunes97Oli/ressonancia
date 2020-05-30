<template>
  <div>
    <q-card class="bg-light-blue-7 fullscreen">
      <q-card-section>
        <div>
          <q-img
          src="/statics/img/scaanCT_black.png"
          class="logoR"
          />
        </div>
        <div class="titleR">
          Resultado
        </div>

        <div>
          
        </div>
        
        <div class="buttonR1">
          <q-btn color="amber-13" text-color="black" icon-right="send" label="AVANÇAR" to="form"/>
        </div>

        <div class="buttonR2">
          <q-btn color="amber-13" text-color="black" icon-right="home" label="HOME" to="/"/>
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
.logoR{
  width: 15vw;
  margin-left: 39.3vw;
}

.titleR {
  margin-top: 3vh;
  margin-left: 28.2vw;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 5vh;
}

.buttonR1{
  margin-left: 27.5vw;
  margin-top: 10vh;  
}

.buttonR2{
  margin-left: 31.5vw;
  margin-top: 4vh;  
}
</style>