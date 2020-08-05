<script>
export default {
  props: {
    routerPath: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: () => 'default'
    }, // 目前支持 default primary
    text: {
      type: [String, Number],
      required: true,
    },
    onTap: {
      type: Function,
      default: () => {},
    },
    closable: {
      type: Boolean,
      default: () => false,
    },
    onClose: {
      type: Function,
      default: () => {},
    }
  },
  render() {
    return (
      <div
        class="tag"
        onClick={() => {
          this.onTap && this.onTap(this.routerPath, this.type);
        }}
      >
        <span
          class={`tag__dot tag__dot--${this.type}`}
        ></span>
        <span class="tag__text">{this.text}</span>
        <span class="tag__close-wrapper">
          {this.closable ? <i onClick={(e) => {
            e.stopPropagation()
            // e.preventDefault()
            this.onClose && this.onClose(this.routerPath, this.type)
          }} class="el-icon-close"></i> : null}
        </span>
      </div>
    );
  },
};
</script>
<style lang="less" scoped>
@tag-size: 28px;

// tag
.tag {
  display: inline-block;
  height: @tag-size;
  line-height: @tag-size;
  margin: 2px 4px 2px 0;
  padding: 0 8px;
  border: 1px solid #e8eaec;
  border-radius: 3px;
  font-size: 12px;
  vertical-align: middle;
  opacity: 1;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;

  &__text {
    color: #515a6e;
    font-size: 12px;
    line-height: @tag-size;
    vertical-align: 1px;
    user-select:none;
  }

  &__close {
    width: 20px;
    height: 20px;
    font-size: 14px;
    color: #cacaca;
    margin-left: 10px;
    vertical-align: -1px;
  }

  &__dot {
    height: 12px;
    width: 12px;
    line-height: @tag-size;
    color: #515a6e;
    display: inline-block;
    border-radius: 50%;
    margin-right: 8px;
  }
  &__close-wrapper {
    display: inline-block;
    margin-left: 5px;
    color: #b8b8b8;
  }
  &__close-wrapper:hover{
    transform: scale(1.1);
    color: #2d8cf0;
  }

  &__dot--default {
    background: #e8eaec;
  }

  &__dot--primary {
    background: #2d8cf0;
  }
}
</style>