<script setup>
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import { ElForm, ElFormItem, ElInput, ElRadioGroup, ElRadio } from 'element-plus'
import RoleOrderWrap from './wrap'

const test = ref('2')
const radio1 = ref('1')
</script>

<template>
    <RoleOrderWrap :order="true">
        <template #header>
            <div>被包裹运行正常的</div>
          <ElForm label-width="120px">
            <ElFormItem label="角色名称">
              <div><ElInput v-model="test" /></div>
              {{'绑定的值'+ test }}
              <div>
                <ElRadioGroup v-model="radio1" class="ml-4">
                    <ElRadio label="1" size="large">Option 1</ElRadio>
                    <ElRadio label="2" size="large">Option 2</ElRadio>
                  </ElRadioGroup>
                  <div>{{'绑定的值'+radio1}}</div>
            </div>
            </ElFormItem>
          </ElForm>
        </template>
    
        <div>
            <div>不被包裹，运行不正常的,点击单选，值不会更新</div>
            <ElRadioGroup v-model="radio1" class="ml-4">
                <ElRadio label="1" size="large">Option 1</ElRadio>
                <ElRadio label="2" size="large">Option 2</ElRadio>
              </ElRadioGroup>
              <ElInput v-model="test"></ElInput>
        </div>
       <div>
        <p></p>
        <div>原生</div>
        <input v-model="test" />
       </div>
      </RoleOrderWrap>
</template>
<style   scoped>
.text-align-center {
  text-align: center;
}
.border {
  border: 1px solid red;
}
.container {
  display: flex;
}
.padding-l-10 {
  padding-left: 10px;
}
</style>
