import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Configuration } from './configuration';

import { AccessTokenService } from './api/accessToken.service';
import { ActivitiesService } from './api/activities.service';
import { AmazonWebServicesS3Service } from './api/amazonWebServicesS3.service';
import { AuthClientsService } from './api/authClients.service';
import { AuthPermissionsService } from './api/authPermissions.service';
import { AuthRolesService } from './api/authRoles.service';
import { AuthTokensService } from './api/authTokens.service';
import { CampaignsService } from './api/campaigns.service';
import { CampaignsChallengesService } from './api/campaignsChallenges.service';
import { CampaignsRewardsService } from './api/campaignsRewards.service';
import { CategoriesService } from './api/categories.service';
import { ChatService } from './api/chat.service';
import { ConfigsService } from './api/configs.service';
import { ContentArticlesService } from './api/contentArticles.service';
import { ContentCommentsService } from './api/contentComments.service';
import { CurrenciesService } from './api/currencies.service';
import { DevicesService } from './api/devices.service';
import { DispositionsService } from './api/dispositions.service';
import { FulfillmentService } from './api/fulfillment.service';
import { GamificationAchievementsService } from './api/gamificationAchievements.service';
import { GamificationLeaderboardsService } from './api/gamificationLeaderboards.service';
import { GamificationLevelingService } from './api/gamificationLeveling.service';
import { GamificationMetricsService } from './api/gamificationMetrics.service';
import { GamificationTriviaService } from './api/gamificationTrivia.service';
import { InvoicesService } from './api/invoices.service';
import { LocationsService } from './api/locations.service';
import { LogsService } from './api/logs.service';
import { MediaArtistsService } from './api/mediaArtists.service';
import { MediaModerationService } from './api/mediaModeration.service';
import { MediaPollsService } from './api/mediaPolls.service';
import { MediaVideosService } from './api/mediaVideos.service';
import { MessagingService } from './api/messaging.service';
import { MessagingTopicsService } from './api/messagingTopics.service';
import { NotificationsService } from './api/notifications.service';
import { ObjectsService } from './api/objects.service';
import { PaymentsService } from './api/payments.service';
import { PaymentsAppleService } from './api/paymentsApple.service';
import { PaymentsFattMerchantService } from './api/paymentsFattMerchant.service';
import { PaymentsOptimalService } from './api/paymentsOptimal.service';
import { PaymentsPayPalClassicService } from './api/paymentsPayPalClassic.service';
import { PaymentsStripeService } from './api/paymentsStripe.service';
import { PaymentsTransactionsService } from './api/paymentsTransactions.service';
import { PaymentsWalletsService } from './api/paymentsWallets.service';
import { PaymentsXsollaService } from './api/paymentsXsolla.service';
import { ReportingChallengesService } from './api/reportingChallenges.service';
import { ReportingOrdersService } from './api/reportingOrders.service';
import { ReportingRevenueService } from './api/reportingRevenue.service';
import { ReportingSubscriptionsService } from './api/reportingSubscriptions.service';
import { ReportingUsageService } from './api/reportingUsage.service';
import { ReportingUsersService } from './api/reportingUsers.service';
import { RuleEngineActionsService } from './api/ruleEngineActions.service';
import { RuleEngineEventsService } from './api/ruleEngineEvents.service';
import { RuleEngineExpressionsService } from './api/ruleEngineExpressions.service';
import { RuleEngineGlobalsService } from './api/ruleEngineGlobals.service';
import { RuleEngineRulesService } from './api/ruleEngineRules.service';
import { RuleEngineTriggersService } from './api/ruleEngineTriggers.service';
import { RuleEngineVariablesService } from './api/ruleEngineVariables.service';
import { SearchService } from './api/search.service';
import { SocialFacebookService } from './api/socialFacebook.service';
import { SocialGoogleService } from './api/socialGoogle.service';
import { StoreService } from './api/store.service';
import { StoreBundlesService } from './api/storeBundles.service';
import { StoreCouponsService } from './api/storeCoupons.service';
import { StoreSalesService } from './api/storeSales.service';
import { StoreShippingService } from './api/storeShipping.service';
import { StoreShoppingCartsService } from './api/storeShoppingCarts.service';
import { StoreSubscriptionsService } from './api/storeSubscriptions.service';
import { StoreVendorsService } from './api/storeVendors.service';
import { TaxesService } from './api/taxes.service';
import { TemplatesPropertiesService } from './api/templatesProperties.service';
import { UsersService } from './api/users.service';
import { UsersAddressesService } from './api/usersAddresses.service';
import { UsersFriendshipsService } from './api/usersFriendships.service';
import { UsersGroupsService } from './api/usersGroups.service';
import { UsersInventoryService } from './api/usersInventory.service';
import { UsersRelationshipsService } from './api/usersRelationships.service';
import { UsersSubscriptionsService } from './api/usersSubscriptions.service';
import { UtilBatchService } from './api/utilBatch.service';
import { UtilHealthService } from './api/utilHealth.service';
import { UtilMaintenanceService } from './api/utilMaintenance.service';
import { UtilSecurityService } from './api/utilSecurity.service';
import { UtilVersionService } from './api/utilVersion.service';

@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [],
  exports:      [],
  providers:    [ AccessTokenService, ActivitiesService, AmazonWebServicesS3Service, AuthClientsService, AuthPermissionsService, AuthRolesService, AuthTokensService, CampaignsService, CampaignsChallengesService, CampaignsRewardsService, CategoriesService, ChatService, ConfigsService, ContentArticlesService, ContentCommentsService, CurrenciesService, DevicesService, DispositionsService, FulfillmentService, GamificationAchievementsService, GamificationLeaderboardsService, GamificationLevelingService, GamificationMetricsService, GamificationTriviaService, InvoicesService, LocationsService, LogsService, MediaArtistsService, MediaModerationService, MediaPollsService, MediaVideosService, MessagingService, MessagingTopicsService, NotificationsService, ObjectsService, PaymentsService, PaymentsAppleService, PaymentsFattMerchantService, PaymentsOptimalService, PaymentsPayPalClassicService, PaymentsStripeService, PaymentsTransactionsService, PaymentsWalletsService, PaymentsXsollaService, ReportingChallengesService, ReportingOrdersService, ReportingRevenueService, ReportingSubscriptionsService, ReportingUsageService, ReportingUsersService, RuleEngineActionsService, RuleEngineEventsService, RuleEngineExpressionsService, RuleEngineGlobalsService, RuleEngineRulesService, RuleEngineTriggersService, RuleEngineVariablesService, SearchService, SocialFacebookService, SocialGoogleService, StoreService, StoreBundlesService, StoreCouponsService, StoreSalesService, StoreShippingService, StoreShoppingCartsService, StoreSubscriptionsService, StoreVendorsService, TaxesService, TemplatesPropertiesService, UsersService, UsersAddressesService, UsersFriendshipsService, UsersGroupsService, UsersInventoryService, UsersRelationshipsService, UsersSubscriptionsService, UtilBatchService, UtilHealthService, UtilMaintenanceService, UtilSecurityService, UtilVersionService ]
})
export class ApiModule {
    public static forConfig(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ {provide: Configuration, useFactory: configurationFactory}]
        }
    }
}
