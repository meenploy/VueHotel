<template>
  <ion-page>
    <ion-header mode="ios">
            <ion-toolbar color="danger">
                <ion-buttons slot="start">
                  <ion-back-button default-href="checkin" text=""></ion-back-button>
                </ion-buttons>
            <ion-title>Select Hotel</ion-title>
            </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="ios">
    <ion-card color=""> 
      <div class="ion-no-margin"> 
          <ion-list lines="full" class="ion-no-padding"> 
              <ion-slides> 
                <ion-slide> 
                  <div class="slide"> 
                    <img 
                      src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/161159671.jpg?k=303338a6b1b5474e670d5b6cd98ae38bc44ad3576d9743cc516964f1aee5a679&o=&hp=1" 
                    /> 
                  </div> 
                </ion-slide> 
  
              </ion-slides> 
 
              <ion-grid> 
                <ion-row> 
                  <ion-col size="7"> 
                    <ion-label color="dark"> 
                      <h2><b>Rimtalay Resort Koh Larn</b></h2> 
                      <h3>ริมทะเล รีสอร์ท</h3> 
                    </ion-label> 
                  </ion-col> 
                  <ion-col size="5"> 
                    <ion-label> 
                      <h3 class="ion-text-right"> 
                        <ion-text color="danger"> 
                          <h2> 
                            2,436<small>&nbsp;THB</small><span>/ห้อง/คืน</span> 
                          </h2> 
                        </ion-text> 
                        <ion-text color="medium"> ราคารวมภาษีแล้ว </ion-text> 
                      </h3> 
                    </ion-label> 
                  </ion-col> 
                </ion-row> 
              </ion-grid> 
 
              <ion-card-content style="text-align: left"> 
                <ion-label color="dark">
                <ion-icon :icon="pinOutline"></ion-icon 
                >&nbsp;Rimtalay Resort Koh Larn ตั้งอยู่บริเวณหาดตายายของเกาะล้าน
            ห่างจากท่าเรือหน้าบ้านไม่เกิน 900 ม. และห่างจากหาดตายาย 600 ม.<br /> 
                <ion-icon :icon="wifiOutline"></ion-icon 
                >&nbsp;ฟรี Wi-Fi<br /> 
                <ion-icon :icon="fastFoodOutline"></ion-icon 
                >&nbsp;ฟรีอาหารเช้า<br /> 
                &nbsp;ยกเลิกการจองได้ฟรี</ion-label> 
              </ion-card-content> 
             
          </ion-list> 
 
          <br/> 
          <ion-button color="danger" class="ion-no-margin" expand="full" href="/SelectRoom">เลือก</ion-button> 
      </div> 
  </ion-card>
          <ion-card color=""> 
      <div class="ion-no-margin"> 
          <ion-list lines="full" class="ion-no-padding"> 
              <ion-slides> 
                <ion-slide> 
                  <div class="slide"> 
                    <img 
                      src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/256269680.jpg?k=97edf7246251432b705ae080ff39e3f894b7579f5635b2c49e92b3ac79ea6f37&o=&hp=1" 
                    /> 
                  </div> 
                </ion-slide> 
 
              </ion-slides> 
 
              <ion-grid> 
                <ion-row> 
                  <ion-col size="7"> 
                    <ion-label color="dark"> 
                      <h2><b>The Castello Resort</b></h2> 
                      <h3>เดอะ คาสเตลโล รีสอร์ท</h3> 
                    </ion-label> 
                  </ion-col> 
                  <ion-col size="5"> 
                    <ion-label> 
                      <h3 class="ion-text-right"> 
                        <ion-text color="danger"> 
                          <h2> 
                            3,456<small>&nbsp;THB</small><span>/ห้อง/คืน</span> 
                          </h2> 
                        </ion-text> 
                        <ion-text color="medium"> ราคารวมภาษีแล้ว </ion-text> 
                      </h3> 
                    </ion-label> 
                  </ion-col> 
                </ion-row> 
              </ion-grid> 
 
              <ion-card-content style="text-align: left"> 
                <ion-label color="dark">
                <ion-icon :icon="pinOutline"></ion-icon 
                >&nbsp;The Castello Resort ตั้งอยู่ห่างจากหาดตาแหวน 10 นาที
            หากเดินทางโดยรถยนต์ ห่างจากท่าเรือหน้าบ้าน 400 เมตร
            และห่างจากสนามบินสุวรรณภูมิ 85 กิโลเมตร<br /> 
                <ion-icon :icon="wifiOutline"></ion-icon 
                >&nbsp;ฟรี Wi-Fi<br /> 
                <ion-icon :icon="fastFoodOutline"></ion-icon 
                >&nbsp;ฟรีอาหารเช้า<br /> 
                &nbsp;ยกเลิกการจองได้ฟรี</ion-label> 
              </ion-card-content> 
             
          </ion-list> 
 
          <br/> 
          <ion-button color="danger" class="ion-no-margin" expand="full" href="/SelectRoom">เลือก</ion-button> 
      </div> 
  </ion-card>
          <ion-card color=""> 
      <div class="ion-no-margin"> 
          <ion-list lines="full" class="ion-no-padding"> 
              <ion-slides> 
                <ion-slide> 
                  <div class="slide"> 
                    <img 
                      src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/274006931.jpg?k=303773db63893319db96b8b840968d6f54620d9027a5fbcb9547174bdd568b7d&o=&hp=1" 
                    /> 
                  </div> 
                </ion-slide> 
              </ion-slides> 
 
              <ion-grid> 
                <ion-row> 
                  <ion-col size="7"> 
                    <ion-label color="dark"> 
                      <h2><b>Homebeach Resort</b></h2> 
                      <h3>โฮมบีช รีสอร์ท</h3> 
                    </ion-label> 
                  </ion-col> 
                  <ion-col size="5"> 
                    <ion-label> 
                      <h3 class="ion-text-right"> 
                        <ion-text color="danger"> 
                          <h2> 
                            4,345<small>&nbsp;THB</small><span>/ห้อง/คืน</span> 
                          </h2> 
                        </ion-text> 
                        <ion-text color="medium"> ราคารวมภาษีแล้ว </ion-text> 
                      </h3> 
                    </ion-label> 
                  </ion-col> 
                </ion-row> 
              </ion-grid> 
 
              <ion-card-content style="text-align: left"> 
                <ion-label color="dark">
                <ion-icon :icon="pinOutline"></ion-icon 
                >&nbsp;Homebeach Resort เกาะล้านตั้งอยู่ในเกาะล้าน ห่างจากหาดทองหลาง 750 ม.<br /> 
                <ion-icon :icon="wifiOutline"></ion-icon 
                >&nbsp;ฟรี Wi-Fi<br /> 
                <ion-icon :icon="fastFoodOutline"></ion-icon 
                >&nbsp;ฟรีอาหารเช้า<br /> 
                &nbsp;ยกเลิกการจองได้ฟรี</ion-label> 
              </ion-card-content> 
             
          </ion-list> 
 
          <br/> 
          <ion-button color="danger" class="ion-no-margin" expand="full" href="/SelectRoom">เลือก</ion-button> 
      </div> 
  </ion-card>
    
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage,
         IonHeader, 
         IonToolbar, 
         IonTitle, 
         IonContent,
         IonButtons,
         IonBackButton,
         IonList,
         IonLabel,
         IonIcon,
         } from '@ionic/vue';
import { pinOutline, wifiOutline, fastFoodOutline, } from 'ionicons/icons';

export default  defineComponent({
  name: 'SelectHotel',
  components: { IonHeader, 
                IonToolbar, 
                IonTitle, 
                IonContent, 
                IonPage,
                IonButtons,
                IonBackButton,
                IonList,
                IonLabel,
                IonIcon,},
  setup() {
    return {
      pinOutline,
      wifiOutline,
      fastFoodOutline,

    }
  }
});
</script>
