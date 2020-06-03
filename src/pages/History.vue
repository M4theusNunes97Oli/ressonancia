<template>
    <div>
        <q-card class="bg-light-blue-7 fullscreen">
            <q-card-section>
                <div class="row">
                    <div class="col">
                        <q-img
                        src="/statics/img/scaanCT_black.png"
                        class="logoM"
                        />
                    </div>
                    <div class="col text-amber-13">
                        <q-icon size="md" name="info" class="icon-infoM" @click="dialog = true"/>
                        <q-dialog v-model="dialog" persistent>
                            <q-card>
                            <q-card-section class="row items-center">
                                <span class="q-ml-sm">You are currently not connected to any network.</span>
                            </q-card-section>

                            <q-card-section class="row items-center">
                                <span class="q-ml-sm">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                                a galley of type and scrambled it to make a type specimen book.
                                </span>
                            </q-card-section>

                            <!-- Notice v-close-popup -->
                            <q-card-actions align="right">
                                <q-btn flat label="Fechar" color="primary" v-close-popup />
                            </q-card-actions>
                            </q-card>
                        </q-dialog>
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
      dialog: false,
      cancelEnabled: false
    }
  }
}
</script>

<style>

.icon-infoM {
  width: 50vw;
  margin-left: 15vw;
}

.logoM {
  width: 15vw;
  margin-left: 38vw;
}

</style>