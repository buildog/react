import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';

import editorStyles from './styles.css';

const positionSuggestions = ({ state, props }) => {

    //const wrapperRect = this.refs.editorWrapper.getBoundingClientRect();
    //const left = decoratorRect.left - wrapperRect.left;
    // const top = decoratorRect.top - wrapperRect.top;

    const left = 60, bottom = 40;

    let transform;
    let transition;

    if (state.isActive) {
      transform = 'scale(1)';
      transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
    } else{
      transform = 'scale(0)';
      transition = 'all 0.35s cubic-bezier(.3,1,.2,1)';
    }

    return {
      position: 'absolute',
      left: `${left}px`,
      bottom: `${(bottom)}px`,
      transform,
      transformOrigin: '1em 0%',
      transition,
    };


};


const emojiPlugin = createEmojiPlugin({
  theme : {
      emoji:editorStyles.emoji,
      emojiCharacter:editorStyles.emojiCharacter,
      emojiSuggestionsEntry:editorStyles.emojiSuggestionsEntry,
      emojiSuggestionsEntryFocused:editorStyles.emojiSuggestionsEntryFocused,
      emojiSuggestionsEntryText:editorStyles.emojiSuggestionsEntryText,
      emojiSuggestionsEntryIcon:editorStyles.emojiSuggestionsEntryIcon,
      emojiSuggestions : editorStyles.emojiSuggestions
  },
  imagePath:'https://cdnjs.cloudflare.com/ajax/libs/emojione/2.1.4/assets/svg/',
  positionSuggestions: positionSuggestions

});
const { EmojiSuggestions } = emojiPlugin;
const plugins = [emojiPlugin];
const text = ``;


//import 'draft-js-emoji-plugin/lib/plugin.css';

export default class Message extends Component {


  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };


 /**
   * returns the inline styles for the suggestion component to align it correctly with the completion
   * because this item scrolls, we need to absolutely position it to the parent
   */
  getPositionSuggestions = ({ decoratorRect, state, props }) => {
    const wrapperRect = this.refs.editorWrapper.getBoundingClientRect();
    const left = decoratorRect.left - wrapperRect.left;
    const top = decoratorRect.top - wrapperRect.top;

    let transform;
    let transition;

    if (state.isActive & props.suggestions.size > 0) {
      transform = 'scale(1)';
      transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
    } else if (state.isActive) {
      transform = 'scale(0)';
      transition = 'all 0.35s cubic-bezier(.3,1,.2,1)';
    }

    return {
      position: 'absolute',
      left: `${left}px`,
      top: `${(top)}px`,
      transform,
      transformOrigin: '1em 0%',
      transition,
    };
  };


  focus = () => {
    this.refs.editor.focus();
  };

  render() {
    return (
      <div className={ editorStyles.editor } onClick={ this.focus }>
        <button><span>+</span></button>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref="editor"
        />
        <EmojiSuggestions />
      </div>
    );
  }
}
