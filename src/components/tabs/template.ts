/*
 * @Descripttion: tabs组件html模板
 * @creater: zhengpeng.ren
 * @since: 2024-12-19
 */
import { html, classMap } from '../../based-on';
import classNamesConfig from './classNames';
import { NvTabs } from './index.ts';

interface Context {
  _handleTabClick: (name: string, event: Event) => void;
  _handleTabRemove: (name: string, event: Event) => void;
  _handleTabAdd: (event: Event) => void;
  _handleTabEdit: (name: string, event: Event) => void;
  _handleTabEditComplete: (name: string, newLabel: string, event: Event) => void;
  _handleTabEditCancel: (event: Event) => void;
  _editingTabName: string | null;
}

const template = function(this: NvTabs, context: Context) {
  const { _handleTabClick, _handleTabRemove, _handleTabAdd, _handleTabEdit, _handleTabEditComplete, _handleTabEditCancel, _editingTabName } = context;

  const classMapResult = classMap({
    [classNamesConfig.block]: true,
    [classNamesConfig.modifiers.card]: this.type === 'card',
    [classNamesConfig.modifiers['border-card']]: this.type === 'border-card',
    [classNamesConfig.modifiers.top]: this.position === 'top',
    [classNamesConfig.modifiers.bottom]: this.position === 'bottom',
    [classNamesConfig.modifiers.left]: this.position === 'left',
    [classNamesConfig.modifiers.right]: this.position === 'right'
  });

  const headerContent = html`
    <div part="header" class=${ classNamesConfig.elements.header }>
      <div part="nav-wrap" class=${ classNamesConfig.elements['nav-wrap'] }>
        <div part="nav-scroll" class=${ classNamesConfig.elements['nav-scroll'] }>
          <div part="nav" class=${ classNamesConfig.elements.nav }>
            ${ this.tabs.map((tab) => {
              const itemClassMap = classMap({
                [classNamesConfig.elements.item]: true,
                'is-active': tab.active,
                'is-disabled': tab.disabled,
                'is-editing': _editingTabName === tab.name
              });
              const isEditing = _editingTabName === tab.name;
              return html`
                <div
                  part="item"
                  class=${ itemClassMap }
                  data-name=${ tab.name }
                  @click=${ (e: Event) => _handleTabClick(tab.name, e) }
                  @dblclick=${ (e: Event) => _handleTabEdit(tab.name, e) }
                >
                  ${ isEditing
                    ? html`
                        <input
                          class=${ classNamesConfig.elements['item-edit-input'] }
                          type="text"
                          .value=${ tab.label }
                          @blur="${ (e: Event) => {
                            const input = e.target as HTMLInputElement;
                            _handleTabEditComplete(tab.name, input.value, e);
                          } }"
                          @keydown="${ (e: KeyboardEvent) => {
                            if (e.key === 'Enter') {
                              const input = e.target as HTMLInputElement;
                              _handleTabEditComplete(tab.name, input.value, e);
                            } else if (e.key === 'Escape') {
                              _handleTabEditCancel(e);
                            }
                          } }"
                        />
                      `
                    : html`
                        <span part="item-label" class=${ classNamesConfig.elements['item-label'] }>${ tab.label }</span>
                        ${ this.closable
                          ? html`
                              <nv-icon
                                part="item-close"
                                class=${ classNamesConfig.elements['item-close'] }
                                name="close"
                                @click=${ (e: Event) => _handleTabRemove(tab.name, e) }
                              ></nv-icon>
                            `
                          : '' }
                      ` }
                </div>
              `;
            }) }
            ${ this.addable
              ? html`
                  <div
                    part="item-add"
                    class=${ classNamesConfig.elements['item-add'] }
                    @click=${ _handleTabAdd }
                  >
                    <nv-icon name="plus"></nv-icon>
                  </div>
                `
              : '' }
          </div>
        </div>
      </div>
    </div>
  `;

  const contentSlot = html`
    <div part="content" class=${ classNamesConfig.elements.content }>
      <slot @slotchange="${ () => { this._updateTabs(); } }"></slot>
    </div>
  `;

  // 根据位置调整 header 和 content 的顺序
  const isBottom = this.position === 'bottom';
  const isRight = this.position === 'right';

  return html`
    <div part="base" class=${ classMapResult }>
      ${ isBottom || isRight ? contentSlot : headerContent }
      ${ isBottom || isRight ? headerContent : contentSlot }
    </div>
  `;
};

export default template;
