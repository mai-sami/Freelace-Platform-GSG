import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import PropTypes from 'prop-types';

function Tag(props) {
    const { label, onDelete, ...other } = props;
    return (
        <div {...other}>
            <span>{label}</span>
            <CloseIcon onClick={onDelete} />
        </div>
    );
}

Tag.propTypes = {
    label: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};


export const Listbox = styled('ul')` 
    width: 300px;
    margin: 2px 0 0;
    padding: 0;
    position: absolute;
    list-style: none;
    overflow: auto;
    max-height: 250px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 1;

    & li {
      padding: 5px 12px;
      display: flex;
  
      & span {
        flex-grow: 1;
      }
  
      & svg {
        color: transparent;
      }
    }
  
    & li[aria-selected='true'] {
       font-weight: 600;
  
      & svg {
        color: #1890ff;
      }
    }
  
    & li.${autocompleteClasses.focused} {
    background-color: #e4ebe4;
      cursor: pointer;
  
      & svg {
        color: currentColor;
      }
    }
  `

export const StyledTag = styled(Tag)`
    display: flex;
    align-items: center;
    margin: .4rem;
    border: 1px solid #736b6b;
    border-radius: 12px;
    box-sizing: content-box;
    background-color: green;
    padding: .2rem .8rem .2rem .8rem;
    outline: 0;
    overflow: hidden;
    color:white;
    justify-content: space-between;
    &:focus {
      border-color:#736b6b;
      background-color: #736b6b;
    }
  
    & span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    font-weight: 600;
    }
  
    & svg {
      font-size: 12px;
      cursor: pointer;
      padding: 4px;
    }
  `

export const Root = styled('div')`
    color:white
    font-size: 17px;
  `
export const InputWrapper = styled('div') `
    width: 700px;
    border: 1px solid #d9d9d9;
     border-radius: 4px;
    padding: 1px;
    display: flex;
    flex-wrap: wrap;
     &:hover {
      border-color: '#3c8224'
    }
  
    &.focused {
      border-color: '#3c8224';
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
    & input {
       height: 30px;
      box-sizing: border-box;
      padding: 4px 6px;
      width: 0;
      min-width: 30px;
      flex-grow: 1;
      border: 0;
      margin: 0;
      outline: 0;
    }
  `

