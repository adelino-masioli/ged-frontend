import React, { Component } from 'react'
import Breadcrumb from '../../component/templates/Breadcrumb';
import BreadcrumbItem from '../../component/templates/BreadcrumbItem';
import PageHeaderTitle from '../../component/templates/PageHeaderTitle';
import ValueBox from '../../component/widget/valuebox';
import Row from '../../component/layout/row';
import Grid from '../../component/layout/layoutGrid';
import Datatable from '../../component/datatable/Datatable';

class Home extends Component {
    render() {
        const headerTitle = ['#', 'TASK', 'PROGRESS', 'LABEL'];
        return(
            <div className="content-wrapper">
                <section className="content-header">
                    <PageHeaderTitle>
                        Dashboard
                    <small>Version 2.0</small>
                    </PageHeaderTitle>
                    <Breadcrumb>
                        <BreadcrumbItem path='/' icon='fa fa-home' label='Home' />
                        <BreadcrumbItem active='active' label='Dashboard' />
                    </Breadcrumb>
                </section>

                <section className="content">
                    <Row>
                        <ValueBox cols='12 3' color='bg-aqua' icon='ion ion-ios-gear-outline' value='125' text='Text Example' url='/' />
                        <ValueBox cols='12 3' color='bg-red' icon='fa fa-google-plus' value='1580' text='Text Example' url='/' />
                        <ValueBox cols='12 3' color='bg-green' icon='ion ion-ios-cart-outline' value='10' text='Text Example' url='/' />
                        <ValueBox cols='12 3' color='bg-yellow' icon='ion ion-ios-people-outline' value='958' text='Text Example' url='/' />
                    </Row>
                    <Row>
                        <Grid cols='12 6'>
                            <Datatable boxHeader="Datatable 1" headerTitle={headerTitle} />
                        </Grid>
                        <Grid cols='12 6'>
                            <Datatable boxHeader="Datatable 2" headerTitle={headerTitle} />
                        </Grid>
                    </Row>
                    <Row>
                        <Grid cols='12 12'>
                            <Datatable boxHeader="Datatable 3" headerTitle={headerTitle} />
                        </Grid>
                    </Row>
                </section>
            </div>
        )
    }
}
export default Home