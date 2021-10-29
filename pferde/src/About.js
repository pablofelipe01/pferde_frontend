import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const About = () => {
  return (
   
    <Container>
        <Image
          fluid
          src="https://breeders.zangersheide.auction/userfiles/image.php?src=/userfiles/image/IMG_3788__preg2240.JPG&w=800&h=563&zc=1"
          alt='CELIENHA HK Z, '
          style={{ paddingBottom: '2em' }}
          />
          <h1>TERMS AND CONDITIOßNS FOR AUCTION AT FLYINGE OPEN SALE</h1>
        <p>
        These auction terms apply to the online auction Flyinge Open Sales 2021 organized by PS Flyinge & Partners AB ( auctioneer ), corporate identity number 556880-0311, at Qvarnhem, Sjöbo municipality, Saturday 30 October 2021. Auction participants (such as bidders and buyers) and through their participation in the auction, the seller accepts the application of these Auction Terms, and that the Auction Terms shall apply as contract terms when buying a horse at the auction.
        </p>
       <p>
        Horse is sold in existing condition. It is the buyer's responsibility to assess and examine the horse before the auction. Veterinary opinion is only a guide for the buyer and does not release the buyer from his duty to inspect. Questions about the horse can be asked to the seller or his representative.  
       </p>
       <p>
        horse has been inspected by a veterinarian and x-rayed before the auction. Copies of veterinary statements and X-rays are available to auction participants before the auction and are available on request. The seller is not responsible for veterinary statements regarding horses.   
       </p>
        <Button
          variant="dark"
          href="https://psflyinge.se/auktionsvillkor/"
          target="_blank"
          rel="noreferrer noopener"
          style={{ marginTop: '1em' }}
        >
          Read the auction terms
        </Button>
      </Container>
   
  );
};
export default About;