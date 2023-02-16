import { ref, computed, reactive, defineComponent, useSlots } from 'vue'


const RoleOrderWrap = defineComponent({
  props: {

  },
  setup(props) {
    const slots = useSlots()
    const headVNode = slots.header()
    const testNode = slots.default()
    return () => (
      <div>
        <div>{testNode}</div>
        <p></p>
        <p></p>
        <p></p>
        <div >{headVNode}</div>
      </div>
    )
  }
})
export default RoleOrderWrap
