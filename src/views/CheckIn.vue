<template>
  <ion-page>
    <ion-header mode="ios">
            <ion-toolbar color="danger">
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
            <ion-title>Check in Hotel</ion-title>
            </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="ios">
      <ion-card>
        <ion-card-content color="Medium">
            <div class="ion-no-margin">
                    <ion-toolbar>
                    <ion-item lines="full" >
                        <ion-icon :icon="location" />
                        <ion-input placeholder="โรงแรมใกล้ฉัน"></ion-input>
                    </ion-item>
                    </ion-toolbar>

                    <ion-accordion-group color="Medium" mode="ios">
                        <ion-accordion value="start" color="Medium">
                            <ion-item slot="header" color="Medium">
                                <ion-label>วันเช็คอิน</ion-label>
                            </ion-item>
                        </ion-accordion>
                    </ion-accordion-group>

                    <ion-accordion-group color="Medium" mode="ios">
                        <ion-accordion value="start" color="Medium">
                            <ion-item slot="header" color="Medium">
                                <ion-label>วันเช็คเอาท์</ion-label>
                            </ion-item>
                        </ion-accordion>
                    </ion-accordion-group>
                    <ion-item lines="full">
                      <ion-label>จำนวนผู้เข้าพัก</ion-label>
                      <ion-input placeholder="ระบุจำนวนผู้เข้าพัก"></ion-input>
                  </ion-item>
                    <ion-item lines="full">
                        <ion-label>จำนวนห้องที่ต้องการเช่าพัก</ion-label>
                        <ion-input placeholder="ระบุจำนวนห้อง"></ion-input>
                    </ion-item>
                    <br>
                    <ion-button href="/SelectHotel" color="danger" class="ion-no-margin" expand="full" >ค้นหา</ion-button>

            </div>
        </ion-card-content>
    </ion-card>
    
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonBackButton, 
IonCard, IonCardContent, IonItem, IonInput, IonAccordionGroup, IonAccordion, IonLabel, } from '@ionic/vue';
import { location, } from 'ionicons/icons';

export default  defineComponent({
  name: 'CheckIn',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonButton, IonBackButton, IonIcon, 
IonCard, IonCardContent, IonItem, IonInput, IonAccordionGroup, IonAccordion, IonLabel,},
  setup() {
    return {
      location,

    }
  }
});
</script>
