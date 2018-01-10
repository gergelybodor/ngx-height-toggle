import { Injectable } from '@angular/core';

@Injectable()
export class IpsumService {

  private ipsums: Array<string> = [
    'Chupa chups donut pudding powder fruitcake. Donut danish marzipan bear claw topping. Halvah brownie donut tootsie ' +
    'roll liquorice sesame snaps caramels jelly beans sweet roll. Dragée jelly-o candy marshmallow. Cotton candy ' +
    'carrot cake cake cake marshmallow tart. Bonbon jelly jelly beans lemon drops jelly-o. Pastry bonbon ice cream ' +
    'wafer topping muffin oat cake. Cheesecake cookie marzipan gummies gummi bears cupcake. Chocolate danish powder ' +
    'pudding lemon drops fruitcake macaroon. Cake chupa chups tart lollipop halvah brownie chupa chups cheesecake.',

    'Dessert sweet roll sweet dragée powder. Apple pie jelly-o pudding croissant topping apple pie. Sesame snaps ' +
    'toffee jelly beans gummies marshmallow cake. Macaroon cake cotton candy lemon drops chocolate tootsie roll ' +
    'halvah fruitcake biscuit. Cake cake sweet roll gummies cupcake sugar plum dragée. Powder macaroon soufflé bonbon ' +
    'lollipop carrot cake toffee donut marshmallow. Jelly oat cake topping cake. Jelly candy canes icing pudding cake ' +
    'sesame snaps biscuit.',

    'Ice cream chocolate cake chocolate bar gummi bears oat cake gingerbread dessert brownie. Cookie marshmallow ' +
    'fruitcake sweet topping cheesecake jelly beans soufflé macaroon. Lemon drops chocolate cake jelly beans jelly ' +
    'beans jelly beans soufflé tart gummies soufflé. Muffin topping halvah caramels marzipan toffee sugar plum. Bear ' +
    'claw croissant oat cake icing macaroon tart cupcake.',

    'Dragée halvah chocolate. Gummies pudding tootsie roll. Halvah halvah caramels dragée gummies icing. Chocolate ' +
    'cookie pudding pudding cheesecake gummies. Lollipop liquorice sesame snaps apple pie gummies. Candy canes ' +
    'tiramisu cotton candy muffin.',

    'Chocolate jelly-o tootsie roll gummies lollipop jelly beans cookie. Jelly beans chocolate bar bonbon toffee ' +
    'croissant jelly beans pastry danish. Marshmallow liquorice tootsie roll bonbon topping liquorice donut tiramisu. ' +
    'Lemon drops cupcake sweet roll tootsie roll gummies powder cotton candy marshmallow cupcake.',

    'Liquorice icing apple pie bonbon jujubes croissant bonbon. Topping jelly-o ice cream jelly-o chocolate cake. ' +
    'Pastry cake danish cake. Candy wafer cake danish sesame snaps marshmallow bear claw.'
  ];

  constructor() { }

  public getIpsum(): string {
    return this.ipsums[Math.floor(Math.random() * this.ipsums.length)];
  }

  public getDifferentIpsum(ipsum: string): string {
    if (this.ipsums && this.ipsums.length > 1) {
      const ipsums = this.ipsums.slice(0);
      const ipsumIndex = ipsums.findIndex((ip: string) => ip === ipsum);
      if (ipsumIndex === -1) {
        return ipsum;
      }
      ipsums.splice(ipsumIndex, 1);
      return ipsums[Math.floor(Math.random() * ipsums.length)];
    }
    return ipsum;
  }

}
