import React from 'react';
// import { withRouter } from 'react-router-dom'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'

// const Footer = withRouter((props) => {
//   console.log('footer props', props);
//   return (
//     <h2>Footer</h2>
//   )
// })

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          size: 'normal',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          size: 'normal',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          size: 'normal',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    }
  }

  render () {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({id, ...otherSectionProps} ) => (
            <MenuItem key={id} {...otherSectionProps}/>
          ))
        }
        {/* <Footer/> */}
      </div>
    )
  }
}

export default Directory;