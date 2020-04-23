import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Daily from './ActivityTabs/Daily';
import Weekly from './ActivityTabs/Weekly';
import Yearly from './ActivityTabs/Yearly';

class Activity extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="Daily">
            <Daily />
          </Tab>
          <Tab heading="Monthly">
            <Weekly />
          </Tab>
          <Tab heading="yearly">
            <Yearly />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default Activity;
// import React, { Component } from 'react';
// import {
//   Container,
//   Header,
//   Left,
//   Body,
//   Right,
//   Button,
//   Icon,
//   Title,
//   Segment,
//   Content,
//   Text,
// } from "native-base";
// export default class SegmentOutsideHeaderExample extends Component {
//   render() {
//     return (
//       <Container>
//         <Header hasSegment>
//           <Body>
//             <Title styles={styles.back}>Activity</Title>
//           </Body>
//         </Header>
//         <Segment>
//           <Button first active>
//             <Text>Daily</Text>
//           </Button>
//           <Button>
//             <Text>Weekly</Text>
//           </Button>
//           <Button last>
//             <Text>Monthly</Text>
//           </Button>
//         </Segment>
//         <Content padder>
//           <Text>Awesome segment</Text>
//         </Content>
//       </Container>
//     );
//   }
// }

// const styles = {
//   backs:{
//     backgroundColor:'#0D0D0D'
//   }
// };
