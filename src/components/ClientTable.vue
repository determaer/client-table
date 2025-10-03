<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column';
import Tag from 'primevue/tag';
import InputSwitch from 'primevue/inputswitch';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { FilterMatchMode } from 'primevue/api';
import { useClientsStore } from '../store/clientsStore';
import { ref } from 'vue';

const store = useClientsStore()

const filters = ref({
  name: {value: null, matchMode: FilterMatchMode.STARTS_WITH}
})

</script>

<template>
  <div class='border border-[#e5e7eb] p-4 md:p-6 bg-white rounded-2xl w-full bg-white p-6 bg-white shadow-lg rounded-lg flex flex-col gap-4'>
    <span class="font-semibold text-lg">Клиенты</span>
    <DataTable 
      :value="store.getClients()" 
      filterDisplay="row"
      filterLocale="ru"
      :striped-rows="true"
      v-model:filters="filters"
      paginator
      rows="5"
      tableClass="w-full border-spacing-0 border-separate gap-5"
      :pt="{
        thead: {
          class: 'bg-gray-50'
        }
      }"
    >
      <Column field="name" header="Наименование" sortable>
        <template #body="slotProps">
          <Tag class="p-0">
            <div>
              <span class="cursor-pointer text-balance text-xs font-bold inline-flex items-center justify-center px-2 py-1 rounded-md text-primary-inverse bg-blue-500 text-white" data-pc-name="tag" data-pc-section="root">
                <span class="pi pi-info-circle mr-1 text-sm" data-pc-section="icon"></span>
                <span class="leading-normal" data-pc-section="value" >
                  {{ slotProps.data.name}}
                </span>
              </span>
            </div>
          </Tag>
        </template>
        <template #filter="{ filterModel, filterCallback }">
          <InputText 
            v-model="filterModel.value" 
            type="text" 
            @input="filterCallback()" 
            placeholder="Наименование" 
            class="w-40 leading-[normal] m-0 p-3 rounded-md text-gray-800 placeholder:text-gray-400 bg-white border border-gray-300 invalid:focus:ring-red-200 invalid:hover:border-red-500 hover:border-primary focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 focus:z-10 appearance-none transition-colors duration-200"
            />
        </template>
      </Column>
      <Column field="status" header="Статус" >
        <template #body="slotProps">
          <InputSwitch 
            v-model="slotProps.data.status"
            :pt="{
              slider: {
                class: 'bg-blue-500'
              }
            }"
          />
        </template>
      </Column>
      <Column field="login" header="Логин" sortable>
        <template #body="slotProps">
          <div>
            <p class="text-green-500 m-0">{{ slotProps.data.login_name}}</p>
            <p class="m-0">{{ slotProps.data.login}}</p>
          </div>
        </template>
      </Column>
      <Column field="password" header="Пароль" sortable >
        <template #body="slotProps">
          {{ slotProps.data.password }}
        </template>
      </Column>
      <Column field="phone" header="Телефон" sortable>
        <template #body="slotProps">
          <div v-if="slotProps.data.phone">
            <a 
              :href="'tel:' + slotProps.data.phone" 
              class="text-blue-600"
            >
              {{ slotProps.data.phone }}
            </a>
            <span class="pi pi-copy"></span>
          </div>
          <div v-else>
            <span>Не указан</span>
          </div>
        </template>
      </Column>
      <Column field="balance" header="Баланс" sortable>
      <template #body="slotProps">
        <span>{{ slotProps.data.balance }} руб.</span>
      </template>
      </Column>
      <Column field="" header="QR" >
      <template #body="slotProps">
        <Button class="rounded-md py-2 px-2 m-1 text-sm bg-blue-500 text-white cursor-pointer" icon="pi pi-qrcode" text />
      </template>
      </Column>
      <Column field="" header="❌">
        <template #body="slotProps">
          <Button class="rounded-md py-2 px-2 m-1 text-sm bg-red-500 text-white cursor-pointer fit-content" icon="pi pi-trash" text />
        </template>
      </Column>
      <template #empty> 
        <div class="flex ">
          <span>По вашему запросу ничего не найдено</span>
        </div>
      </template>
    </DataTable>
  </div>
</template>