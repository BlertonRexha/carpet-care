<template>
  <el-dialog :model-value="true" title="Create New" width="800" :before-close="handleClose">
    <div>
      <el-form label-position="top">
        <el-form-item label="Emri i klientit">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Tel:">
          <el-input v-model="form.tel" suffix-icon="phone"/>
        </el-form-item>
        <el-form-item>
          <el-col v-for="(carpet, index) in form.carpets" :key="carpet.id" :span="24" class="carpet-details">
            <h3>Tepihi {{ index + 1 }}</h3>
            <el-row>
              <el-col :span="8">
                <el-form-item label="Gjersia X">
                  <el-input v-model="carpet.dimensionsX" class="w-100px" @keypress="isNumber" @input="setDefaultPrice(index)">
                    <template #append>X</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Gjatsia Y">
                  <el-input v-model.number="carpet.dimensionsY" class="w-100px" @keypress="isNumber" @input="setDefaultPrice(index)">
                    <template #append>Y</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Sasia">
                  <el-input-number v-model="carpet.quantity" class="w-100px" @change="setDefaultPrice(index)" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="Qmimi per meter katror">
                  <el-input v-model="carpet.pricePerMeter" @keypress="isNumber" class="w-100px">
                    <template #append>€</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="Qmimi perfundimtar">
                  <el-input v-model="carpet.price" @keypress="isNumber" class="w-100px">
                    <template #append>€</template>
                  </el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8"></el-col>
            </el-row>
          </el-col>
          <div class="add-carpet-btn">
            <el-button type="primary" @click="addNewCarpet">Shto tepih</el-button>
          </div>
        </el-form-item>
        <div class="total-price">
          <el-form-item label="Qmimi perfundimtar">
            <el-input v-model="form.totalPrice" @keypress="isNumber">
              <template #append>€</template>
            </el-input>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleClose"> Mbyll </el-button>
        <el-button type="primary" @click="handleSave"> Ruaj </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import { defineComponent } from 'vue';
import { clone } from 'lodash';
import { isNumber } from '../plugins/utils.ts'
import { useMainStore } from '../store/index.ts'

export default defineComponent({
  name: 'CreateEditListItem',
  props: ['model'],
  data() {
    return {
      dialogVisible: false,
      saving: false,
      form: {
        name: '',
        tel: '',
        carpets: [{
          id: 1,
          dimensionsX: null,
          dimensionsY: null,
          pricePerMeter: 1,
          price: 1,
          quantity: 1,
        }],
        totalPrice: 1,
      },
    };
  },
  mounted() {
    if (this.model) {
      this.form = clone(this.model)
    }
  },
  methods: {
    isNumber,
    handleClose() {
      this.$emit('close');
    },
    handleSave() {
      console.log('saving')
      this.saving = true;
      if (this.model) useMainStore().updateCarpet(this.form);
      else useMainStore().addCarpet(this.form);
      this.saving = false;
      this.handleClose();
    },
    setTotalPrice() {
      this.form.totalPrice = this.form.carpets.reduce((acc, item) => acc += item.price, 0)
    },
    setDefaultPrice(index) {
      const { dimensionsX, dimensionsY, quantity, pricePerMeter } = this.form.carpets[index]
      if (dimensionsX && dimensionsY && quantity && pricePerMeter) {
        this.form.carpets[index].price = dimensionsX * dimensionsY * quantity * pricePerMeter
        this.setTotalPrice()
      }
    },
    addNewCarpet() {
      this.form.carpets.push({
          id: 1,
          dimensionsX: null,
          dimensionsY: null,
          pricePerMeter: 1,
          totalPrice: 1,
          quantity: 1
      })
    }
  },
});
</script>

<style lang="scss" scoped>
  .carpet-details {
    padding: 10px;
    margin-bottom: 10px;
    box-shadow: 0 4px 10px #efefef;
  }
  .add-carpet-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
  }

  .total-price {
    display: flex;
    justify-content: flex-end;
  }
</style>
