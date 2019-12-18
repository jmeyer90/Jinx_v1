import { RECEIVE_BUSINESSES } from '../actions/business_actions';

const SearchReducer = ( state={}, action )=>{
  debugger
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BUSINESSES:
      let attrs = {};
      let menuItems = {};
      let bizNames = {};
      let attrCats = {};

      Object.values(action.businesses).forEach(business => {
        bizNames[business.name]= business.id;

        business.menu_items.forEach( menuItem=>{
          menuItems[menuItem.title] = business.id;
        });

        business.attribute_items.forEach(attr => {
          attrCats[attr.attr_type] = attrCats[attr.attr_type] || [];
          attrCats[attr.attr_type] = [...new Set ( attrCats[attr.attr_type].concat(attr.name) )];
          
          attrs[attr.name] = attrs[attr.name] || [];
          attrs[attr.name] = attrs[attr.name].concat(business.id);
        });
        debugger
      });
      debugger

      return { attrs: attrs, attrCats: attrCats, menuItems: menuItems, businessNames: bizNames }
    default:
      return state;
  }
}

export default SearchReducer;