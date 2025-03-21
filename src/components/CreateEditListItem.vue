<template>
  <el-dialog :model-value="true" title="Create New" width="800" :before-close="handleClose">
    <div>
      <el-form label-position="top">
        <el-form-item label="Name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Tel">
          <el-input v-model="form.tel" />
        </el-form-item>
        <el-form-item label="Carpets">
          <el-row>
            <el-col v-for="(carpet, index) in form.carpets" :key="carpet.id">
              <el-row>
                <el-col :span="12">
                  <el-form-item label="Dimension X">
                    <el-input v-model="carpet.dimensionsX" @change="setDefaultPrice(index)" />
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Dimension Y">
                    <el-input v-model="carpet.dimensionsY" @change="setDefaultPrice(index)" />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-form-item label="Quantity">
                <el-input v-model="carpet.quantity" />
              </el-form-item>
              <el-form-item label="Price">
                <el-input v-model="carpet.price" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="Total Price">
          <el-input v-model="form.totalPrice" />
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleClose">Cancel</el-button>
        <el-button type="primary" @click="handleSave"> Save </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CreateEditListItem',
  props: {
  },
  data() {
    return {
      dialogVisible: false,
      form: {
        name: '',
        tel: '',
        carpets: [{
          id: 1,
          dimensionsX: null,
          dimensionsY: null,
          price: 0,
          quantity: 1,
        }],
        totalPrice: 0,
      },
    };
  },
  methods: {
    handleClose() {
      this.$emit('close');
    },
    handleSave() {
      this.$emit('save');
    },
    setDefaultPrice(index) {
      this.form.carpets[index].price = this.form.carpets[index].dimensionsX
        * this.form.carpets[index].dimensionsY
        * this.form.carpets[index].quantity;
    },
  },
});
</script>

<style lang="scss" scoped></style>
