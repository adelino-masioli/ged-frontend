import './User.css'
import React, { Component } from 'react'
import ActionCreators from '../../../redux/actionCreators'
import { connect } from 'react-redux'
import { confirmAlert } from 'react-confirm-alert'
import Breadcrumb from '../../../component/templates/Breadcrumb'
import BreadcrumbItem from '../../../component/templates/BreadcrumbItem'
import PageHeaderTitle from '../../../component/templates/PageHeaderTitle'
import Row from '../../../component/layout/row'
import Grid from '../../../component/layout/layoutGrid'
import Box from '../../../component/templates/Box'
import BoxHeader from '../../../component/templates/BoxHeader'
import BoxBody from '../../../component/templates/BoxBody'
import ButtonGroup from '../../../component/buttons/ButtonGroup'
import ButtonGroupLink from '../../../component/buttons/ButtonGroupLink'
import ButtonGroupButton from '../../../component/buttons/ButtonGroupButton'
import Toast from '../../../component/notifications/Toast'
import Datatable from '../../../component/datatable/Datatable'

class Create extends Component {
    componentDidMount(){
        this.props.load()
    }
    confirmRemove = (id) => {
        confirmAlert({
            title: 'Importante',
            message: 'Tem certeza dessa operação?',
            buttons: [
            {
                label: 'Sim',
                onClick: () => this.props.remove(id)
            },
            {
                label: 'Não',
                onClick: () => console.log('No confirm')
            }
            ]
        })
    }

    render() {	
        const headerTitle = [{'class':'text-center', 'value':'#'}, {'class':'text-center', 'value':'NOME'}, {'class':'text-center', 'value':'EMAIL'}, {'class':'text-center', 'value':'PERFIL'} , {'class':'text-center', 'value':'AÇÃO'}]
        return(
            <div className="content-wrapper"><Toast/>
                <section className="content-header">
                    <PageHeaderTitle>
                      Usuários
                      <small>Lisgatem</small>
                    </PageHeaderTitle>
                    <Breadcrumb>
                        <BreadcrumbItem path='/' icon='fa fa-home' label='Home' />
                        <BreadcrumbItem active='active' label='Usuário | Lista' />
                    </Breadcrumb>
                </section>

                <section className="content">
                    <Row>
                        <Grid cols='12 12'>
                            <Box>
                                <BoxHeader>
                                    <ButtonGroup>
                                        <ButtonGroupLink link='/user/create' label='Novo' btnclass='bg-aqua' icon='fa fa-plus'/>
                                    </ButtonGroup>
                                </BoxHeader>
                                <BoxBody></BoxBody>
                            </Box>
                        </Grid>
                    </Row>
                    <Row>
                        <Grid cols='12 12'>
                        <Datatable hideTfoot='true'  headerTitle={headerTitle}>
                            {
                                this.props.user.data.map((res, index) =>
                                 <tr key={res.id}>
                                    <td className='text-center'>{res.id}</td>
                                    <td>{res.name}</td>
                                    <td>{res.email}</td>
                                    <td>{res.role}</td>
                                    <td className='text-center'>
                                    <ButtonGroup>
                                      <ButtonGroupLink link={`/users/${res.id}/edit`} label='Editar' btnclass='btn-xs bg-aqua' icon='fa fa-pencil'/>
                                      <ButtonGroupButton label='Excluir' btnclass='btn-xs bg-red' icon='fa fa-trash' click={() => this.confirmRemove(res.id)}/>
                                    </ButtonGroup>
                                    </td>
                                  </tr>
                                )
                            }
                        </Datatable>
                        </Grid>
                    </Row>
                </section>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth,
        user: state.user
    }
}
const mapDispatchToProps = dispatch=> {
    return {
        load: () => dispatch(ActionCreators.getUsersRequest()),
        remove: (id) => dispatch(ActionCreators.removeUserRequest(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Create)
