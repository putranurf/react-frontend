import React, { forwardRef } from 'react';
import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Save from '@material-ui/icons/Save';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    Save: forwardRef((props, ref) => <Save {...props} ref={ref} />)
};

function MultipleActions() {
    return (
        <>
            <MaterialTable
                icons={tableIcons}
                title='Daftar Produk'
                columns={[
                    {
                        title: 'Gambar',
                        field: 'imageUrl',
                        render: (rowData) => (
                            <img src={rowData.imageUrl} style={{ width: 80, borderRadius: '0%' }} />
                        )
                    },
                    { title: 'Nama', field: 'nama' },
                    { title: 'Deskripsi', field: 'deskripsi' },
                    { title: 'Stok', field: 'stok', type: 'numeric' },
                    {
                        title: 'Kategori',
                        field: 'kategori'
                        // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }
                    }
                ]}
                data={[
                    {
                        nama: 'Mehmet',
                        deskripsi: 'Baran',
                        stok: 1987,
                        kategori: 63,
                        imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
                    },
                    {
                        nama: 'Zerya Betül',
                        deskripsi: 'Baran',
                        stok: 2017,
                        kategori: 34,
                        imageUrl: 'https://avatars0.githubusercontent.com/u/7895451?s=460&v=4'
                    }
                ]}
                actions={[
                    {
                        icon: Edit,
                        tooltip: 'Edit',
                        onClick: (event, rowData) => alert('You saved ' + rowData.name)
                    },
                    {
                        icon: DeleteOutline,
                        tooltip: 'Delete',
                        onClick: (event, rowData) => alert('You want to delete ' + rowData.name)
                    },
                    {
                        icon: AddBox,
                        tooltip: 'Tambah Produk',
                        position: 'toolbar',
                        onClick: () => {
                            console.log('clicked');
                        }
                    }
                ]}
                components={{
                    Container: (props) => <Paper {...props} variant='outlined' square />
                }}
                options={{
                    rowStyle: {
                        fontSize: 15
                    },
                    exportButton: true
                }}
            />
        </>
    );
}

export default MultipleActions;
