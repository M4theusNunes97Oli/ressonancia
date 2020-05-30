<template>
  <div>
    <q-card class="bg-light-blue-7 fullscreen">
      <q-card-section>
        <!-- LOGO IMAGE -->
        <div class="row">
          <div class="col text-amber-13">
            <q-icon size="md" name="settings" class="icon-serviceC" @click="marginERROR"/>
          </div>
          <div class="col">
            <q-img
            src="/statics/img/scaanCT_black.png"
            class="logoC"
            />
          </div>
          <div class="col text-amber-13">
            <q-icon size="md" name="info" class="icon-infoC" @click="infoMessenge"/>
          </div>
        </div>
        <!-- IMAGE CUT -->
        <div class="col-4 cropperC">
          <q-img
            src="/statics/img/cranio.jpg"
            :ratio="1"
            class="imgC"
          />
        </div>
        <!-- BUTTON -->
        <div>
          <div class="row">
            <div class="col button1C">
              <q-btn color="amber-13" text-color="black" icon-right="crop" label="CORTAR" to="result"/>
            </div>
            <div class="col button2C">
              <q-btn color="amber-13" text-color="black" icon-right="compare" label="ANALISAR" to="result"/>
            </div>
          </div>
        </div>
      
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style>

.icon-serviceC {
  width: 10vw;
}

.icon-infoC {
  width: 50vw;
}

.logoC {
  width: 15vw;
  margin-left: 8vw;
}

.button1C {
  margin-left: 4vw;
  margin-top: 5vh;  
}

.button2C {
  margin-left: 5vw;
  margin-top: 5vh;  
}

.cropperC {
	height: 110vw;
  background: black;
	margin-top: 3vh;
}
.imgC {
  margin-top: 10%;
}
</style>