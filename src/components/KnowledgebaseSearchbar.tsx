import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter } from '@ionic/react';

const KnowledgebaseSearchbar: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (

        
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
  );
};

export default KnowledgebaseSearchbar;