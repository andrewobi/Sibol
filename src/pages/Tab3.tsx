import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import KnowledgebaseSearchbar from '../components/KnowledgebaseSearchbar';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Knowledge Base</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <KnowledgebaseSearchbar />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Knowledgebase</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
