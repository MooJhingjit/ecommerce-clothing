import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

// const Footer = withRouter((props) => {
//   console.log('footer props', props);
//   return (
//     <h2>Footer</h2>
//   )
// })
const Directory = ({sections}) => (
  <div className="directory-menu">
    {
      sections.map(({id, ...otherSectionProps} ) => (
        <MenuItem key={id} {...otherSectionProps}/>
      ))
    }
    {/* <Footer/> */}
  </div>
);
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);